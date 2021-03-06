import React from 'react';
import * as d3 from "d3";
import Modal from 'react-modal';
import { updateTargets } from '../actions/targetsActions';
import { fetchLocations } from '../actions/locationsActions';
import { connect } from 'react-redux';

class LocationCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            percInput: '',
            slotsInput: '',
            spacesInput: '',
            incomeInput: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    pieId1 = `pGraph1${this.props.id}`;
    pieId2 = `pGraph2${this.props.id}`;
    barId = `bGraph${this.props.id}`;

    redBar = this.barId + 'redBar';
    orangeBar = this.barId + 'orangeBar';
    greenBar = this.barId + 'greenBar';

    canvasHeight = 300;
    canvasWidth = 600;

    radius = 130;

    //For location Card Barchart testing
    dummyGraph =
        {
            location: 'manchester',
            totalStorage: 60,
            totalWarning: 30,
            totalOver: 10
        }


    graphData = [
        {
            total: this.props.location.usedSpaces,
            key: 'Used Spaces',
            color: '#047067'
        },
        {
            total: this.props.location.totalSpaces - this.props.location.usedSpaces,
            key: 'Remaining Spaces',
            color: '#ff7d1c'
        }
    ]

    pie = d3.pie().sort(null).value((d) => d.total);
    angles = this.pie(this.graphData);
    arcPath = d3.arc().outerRadius(this.radius).innerRadius(this.radius / 2);

    componentDidMount() {

        // D3 logic
        const svg1 = d3.select(`#${this.pieId1}`).attr('viewBox', `0 0 ${this.canvasWidth} ${this.canvasHeight}`);
        const svg3 = d3.select(`#${this.barId}`)
            .attr('viewBox', '0 0 400 30')
            .attr('transform', 'translate(20 0)');

        const orangeBarGraph = d3.select(`#${this.orangeBar}`);
        const greenBarGraph = d3.select(`#${this.greenBar}`);

        const storageScale = d3.scaleLinear().range([0, 300]).domain([0, 100]);

        const graph = svg1.append('g').attr('transform', `translate(${this.canvasWidth / 2}, ${this.canvasHeight / 2})`);

        graph.selectAll('path')
            .data(this.angles)
            .enter()
            .append('path')
            .attr('d', this.arcPath)
            .attr('stroke', '#047067')
            .attr('stroke-width', 3)
            .attr('fill', d => d.data.color);


        if (this.props.location.stats.totalStorage !== 0) {
            const greenScale = storageScale(this.props.location.stats.totalStorage);

            greenBarGraph.attr('width', greenScale);

            if (this.props.location.stats.totalWarning !== 0) {
                const orangeScale = greenScale + storageScale(this.props.location.stats.totalWarning);
                orangeBarGraph.attr('width', orangeScale);
            }
        }


    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    openModal() {
        this.setState({
            showModal: true
        })
    }

    async commitNewTargets() {
        if (this.state.percInput !== '', this.state.slotsInput !== '', this.state.spacesInput !== '', this.state.incomeInput !== '') {
            let targetObj = {
                locationId: this.props.location.locationId,
                perc: +this.state.percInput,
                slots: +this.state.slotsInput,
                spaces: +this.state.spacesInput,
                income: +this.state.incomeInput
            }

            await this.props.updateTargets(targetObj);
            setTimeout(() => { this.props.fetchLocations(); }, 700);
            this.closeModal();
        }
        else {
            alert('Please Enter Targets')
        }

    }

    render() {
        const projectionCheck = (obj) => {
            if (obj.projection > obj.targets.income) {
                return 'wh-projection-green';
            }
            else {
                return 'wh-projection-red';
            }
        }


        return (
            <div className="wh-locations-wdgt-dash">
                <div className="wh-locations-wdgts-title">
                    <div className="col s6 wh-locations-wdgts-title-title">
                        <div className="">{this.props.location.location}</div>
                    </div>
                    <div className="col s6 wh-locations-wdgts-title-income">
                        <div className=""><span>Total per/Month: </span>£{this.props.location.incomePerWeek}</div>
                    </div>
                </div>

                <div className="col s12 m6">
                    <div className="wh-locations-wdgts-stats">
                        <div className="wh-locations-wdgts-stats-title">
                            Stats
                        </div>
                        <div className="wh-locations-wdgts-stats-ul">
                        </div>
                        <div className="wh-locations-graphs">

                            <div className="wh-locations-graphs-canvas">
                                <svg id={this.pieId1} className="wh-locations-graphs-graph" >
                                </svg>
                            </div>
                            <div className="wh-locations-graphs-keys">Remaining:{this.graphData[1].total} Used:{this.graphData[0].total} </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="wh-locations-wdgts-stats">
                        <div className="wh-locations-wdgts-stats-title"></div>
                        <div className="wh-locations-targets">
                            <div className="wh-locations-targets-title">
                                Targets
                            </div>
                            <div className="wh-locations-targets-targets">
                                {this.props.location.targets.perc}%, {this.props.location.targets.slots}sl, {this.props.location.targets.spaces}sp, £{this.props.location.targets.income}
                            </div>
                            <div className="wh-locations-targets-projections">
                                Projections: <span className={projectionCheck(this.props.location)}>£{this.props.location.projection}</span>
                            </div>
                            <div className="wh-locations-targets-new" onClick={() => this.openModal()}>
                                New Targets
                            </div>
                        </div>
                        <div className="wh-locations-status">
                            <div className="wh-locations-status-statuses">
                                <span className="wh-locations-status-store">{this.props.location.stats.totalStorage}%</span>
                                <span className="wh-locations-status-warn">{this.props.location.stats.totalWarning}%</span>
                                <span className="wh-locations-status-over">{this.props.location.stats.totalOver}%</span>
                            </div>
                            <div className="wh-locations-status-bar">
                                <svg id={this.barId}>
                                    <rect id={this.redBar} width="300" height="30" fill="red"></rect>
                                    <rect id={this.orangeBar} height="30" fill="orange"></rect>
                                    <rect id={this.greenBar} height="30" fill="lightgreen"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal className="wh-targets-modal" isOpen={this.state.showModal} overlayClassName="wh-modal-Overlay">
                    <div>
                        <h5>New Targets: {this.props.location.location}</h5>
                        <div className="wh-targets-modal-inputfeild">
                            <div className="wh-targets-modal-input">
                                <label for="percInput">Percentage</label>
                                <input name="percInput" type="text" onChange={this.onChange} defaultValue={this.props.location.targets.perc}></input>
                            </div>
                            <div className="wh-targets-modal-input">
                                <label for="slotsInput">Slots</label>
                                <input name="slotsInput" type="text" onChange={this.onChange} defaultValue={this.props.location.targets.slots}></input>
                            </div>
                            <div className="wh-targets-modal-input">
                                <label for="spacesInput">Spaces</label>
                                <input name="spacesInput" type="text" onChange={this.onChange} defaultValue={this.props.location.targets.spaces}></input>
                            </div>
                            <div className="wh-targets-modal-input">
                                <label for="incomeInput">Income</label>
                                <input name="incomeInput" type="text" onChange={this.onChange} defaultValue={this.props.location.targets.income}></input>
                            </div>
                        </div>
                        <div>
                            <button className="wh-newTargets-btn-commit" onClick={() => this.commitNewTargets()}>Commit</button>
                            <button className="wh-newTargets-btn-cancel" onClick={() => this.closeModal()}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default connect(null, { updateTargets, fetchLocations })(LocationCard);