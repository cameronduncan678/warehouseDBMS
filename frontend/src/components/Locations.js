import React from 'react';
import { fetchLocations, updateLocationTargets } from '../actions/locationsActions';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import LocationCard from './LocationCard';

class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationId: '',
            percTarget: 0,
            slotTarget: 0,
            spaceTarget: 0,
            incomeTarget: 0,
            showModal: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchLocations()
    }

    newTargets(index) {
        var locationId = this.props.localLocations[index].locationId;
        var targetObj = this.props.localLocations[index].targets;
        this.setState({
            locationId: locationId,
            percTarget: targetObj.perc,
            slotTarget: targetObj.slots,
            spaceTarget: targetObj.spaces,
            incomeTarget: targetObj.income,
            showModal: true
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit() {
        var targetsObj = {
            locationId: this.state.locationId,
            percTarget: parseInt(this.state.percTarget),
            slotTarget: parseInt(this.state.slotTarget),
            spaceTarget: parseInt(this.state.spaceTarget),
            incomeTarget: parseInt(this.state.incomeTarget),
        }
        this.props.updateLocationTargets(targetsObj);
        this.closeModal();
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    render() {

        const locationNavs = this.props.localLocations.map(warehouse => (
            <div key={warehouse.location} className="wh-location-nav-link">
                <i className="fas fa-warehouse"></i>
                <span>{warehouse.location}</span>
            </div>
        ))



        const locationDash = this.props.localLocations.map((warehouse, index) => (
            <div key={warehouse.locationId}>
                <LocationCard location={warehouse} id={index} />
            </div>
        ))

        return (
            <div className="wh-locations">
                <section className="section">
                    <div className="row">
                        <div id="locationNav" className="col s0 m3">
                            <div className="wh-locations-nav">
                                {locationNavs}
                            </div>
                        </div>
                        <div id='locationDash' className="col s12 m9">
                            <div className="wh-locations-wdgts">
                                {locationDash}
                            </div>
                        </div>
                    </div>
                </section>
                <Modal className="wh-newTargets-modal" isOpen={this.state.showModal} overlayClassName="wh-modal-Overlay">
                    <section className="wh-newTargets-section section">
                        <div className="row wh-newTargets-row">
                            <div className="col s6">
                                <div className="wh-newTargets-input">
                                    <span className="wh-newTargets-input-text">Target %</span>
                                    <span className="wh-newTargets-input-input">
                                        <input type="text" name="percTarget" onChange={this.onChange} value={this.state.percTarget}></input>
                                    </span>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="wh-newTargets-input">
                                    <span className="wh-newTargets-input-text">Target Slots</span>
                                    <span className="wh-newTargets-input-input">
                                        <input type="text" name="slotTarget" onChange={this.onChange} value={this.state.slotTarget}></input>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row wh-newTargets-row">
                            <div className="col s6">
                                <div className="wh-newTargets-input">
                                    <span className="wh-newTargets-input-text">Target Spaces</span>
                                    <span className="wh-newTargets-input-input">
                                        <input type="text" name="spaceTarget" onChange={this.onChange} value={this.state.spaceTarget}></input>
                                    </span>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="wh-newTargets-input">
                                    <span className="wh-newTargets-input-text">Target Income</span>
                                    <span className="wh-newTargets-input-input">
                                        <input type="text" name="incomeTarget" onChange={this.onChange} value={this.state.incomeTarget}></input>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 wh-newTargets-btns">
                                <div className="wh-newTargets-btns-cancel" onClick={() => this.closeModal()}>Cancel</div>
                            </div>
                            <div className="col s6 wh-newTargets-btns">
                                <div className="wh-newTargets-btns-btn" onClick={this.onSubmit}>Commit</div>
                            </div>
                        </div>

                    </section>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    localLocations: state.locations.data
})

export default connect(mapStateToProps, { fetchLocations, updateLocationTargets })(Locations);