import React from 'react';
import { fetchLocations } from '../actions/locationsActions';
import { editRenting } from '../actions/rentingActions';
import { connect } from 'react-redux';

class DataPacket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: this.props.data.client,
            leaseEnd: this.props.data.leaseEnd,
            location: this.props.data.location,
            status: this.props.data.status
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchLocations();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    commitRentingData() {
        var rentingObj = {
            client: this.state.client !== undefined ? this.state.client : this.props.data.client,
            LeaseEnd: this.state.leaseEnd !== undefined ? this.state.leaseEnd : this.props.data.leaseEnd,
            location: this.state.location !== undefined ? this.state.location : this.props.data.location,
            status: this.state.status !== undefined ? this.state.status : this.props.data.status
        }

        this.props.editRenting(rentingObj, this.props.data.orderId);
    }

    deleteData(dataId) {
        alert(`Renting: ${dataId} was not deleted. Functionality Under Review`);
    }

    render() {

        const locationRadios = this.props.localLocations.map(data => {
            if (this.props.data.location === data.location) {
                return (
                    <div key={this.props.data.locationId} className="wh-data-location-item">
                        <span>{data.location}</span>
                        <input className="browser-default" name="location" type="radio" onChange={this.onChange} value={data.location} defaultChecked></input>
                    </div>
                )
            }
            else {
                return (
                    <div key={this.props.data.locationId} className="wh-data-location-item">
                        <span>{data.location}</span>
                        <input className="browser-default" name="location" type="radio" onChange={this.onChange} value={data.location}></input>
                    </div>
                )
            }
        })

        return (
            <div className="wh-datapacket">
                <div className="section">
                    <div className="wh-data-name">
                        <div className="wh-data-wgt">Name</div>
                        <div className="wh-data-input">
                            <input type="text" name="client" onChange={this.onChange} defaultValue={this.props.data.client}></input>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-deadline">
                        <div className="wh-data-wgt">Deadline</div>
                        <div className="wh-data-input">
                            <input type="date" name="leaseEnd" onChange={this.onChange} defaultValue={this.props.data.leaseEnd}></input>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-location">
                        <div className="wh-data-location-wgt">Location</div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-location-selection">
                        {locationRadios}
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-status">
                        <div className="wh-data-wgt">Status</div>
                        <div className="wh-data-input">
                            <select className="browser-defaul" style={{ display: "block" }} name="status" onChange={this.onChange} defaultValue={this.props.data.status}>
                                <option value="storage" className="green">Storage</option>
                                <option value="warning" className="orange">Warning</option>
                                <option value="over" className="red">Over</option>
                                <option value="vacant" className="grey">Vacant</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-submit">
                        <button className="wh-data-submit-btn btn" onClick={() => this.commitRentingData()}>
                            Edit Data
                        </button>
                        <button className="wh-data-delete-btn btn" onClick={() => this.deleteData(this.props.data.orderId)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    localLocations: state.locations.data
});

export default connect(mapStateToProps, { fetchLocations, editRenting })(DataPacket);