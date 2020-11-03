import React from 'react';
import * as d3 from "d3";

class LocationCard extends React.Component {

    pieId1 = `pGraph1${this.props.id}`;
    pieId2 = `pGraph2${this.props.id}`;
    barId = `bGraph${this.props.id}`;

    canvasHeight = 300;
    canvasWidth = 600;

    radius = 130;



    graphData = [
        {
            total: this.props.location.usedSpaces,
            key: 'Used Spaces',
            color: '#ff7d1c'
        },
        {
            total: this.props.location.totalSpaces - this.props.location.usedSpaces,
            key: 'Remaining Spaces',
            color: '#047067'
        }
    ]

    pie = d3.pie().sort(null).value((d) => d.total);
    angles = this.pie(this.graphData);
    arcPath = d3.arc().outerRadius(this.radius).innerRadius(this.radius / 2);

    componentDidMount() {
        const svg1 = d3.select(`#${this.pieId1}`).attr('viewBox', `0 0 ${this.canvasWidth} ${this.canvasHeight}`);
        const svg3 = d3.select(`#${this.barId}`)
            .attr('viewBox', '0 0 400 30')
            .attr('transform', 'translate(20 0)');

        const graph = svg1.append('g').attr('transform', `translate(${this.canvasWidth / 2}, ${this.canvasHeight / 2})`)

        graph.selectAll('path')
            .data(this.angles)
            .enter()
            .append('path')
            .attr('d', this.arcPath)
            .attr('stroke', '#047067')
            .attr('stroke-width', 3)
            .attr('fill', d => d.data.color);
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
                        <div className="">Total per/Month: £{this.props.location.incomePerWeek}</div>
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
                                Next Month Projections: <span className={projectionCheck(this.props.location)}>£{this.props.location.projection}</span>
                            </div>
                            <div className="wh-locations-targets-new">
                                New Targets
                            </div>
                        </div>
                        <div className="wh-locations-status">
                            <div className="wh-locations-status-statuses">
                                <span className="wh-locations-status-store">83%</span>
                                <span className="wh-locations-status-warn">11%</span>
                                <span className="wh-locations-status-over">2%</span>
                            </div>
                            <div className="wh-locations-status-bar">
                                <svg id={this.barId}>
                                    <rect width="300" height="30" fill="red"></rect>
                                    <rect width="295" height="30" fill="orange"></rect>
                                    <rect width="260" height="30" fill="lightgreen"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LocationCard;