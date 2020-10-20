import React from 'react';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            leaseDate: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newData = {
            client: this.state.clientName,
            LeaseEnd: this.state.leaseDate
        }

        console.log(newData);
    }

    render() {
        return (
            <div className="wh-newDatapacket">
                <div className="section">
                    <div className="wh-data-name">
                        <div className="wh-data-wgt">Name</div>
                        <div className="wh-data-input">
                            <input name="clientName" type="text" onChange={this.onChange} value={this.state.clientName}></input>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-deadline">
                        <div className="wh-data-wgt">Lease End</div>
                        <div className="wh-data-input">
                            <input name="leaseDate" type="date" onChange={this.onChange} value={this.state.leaseDate}></input>
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
                        <div className="wh-data-location-item">
                            <span>Manchester</span>
                            <button className="btn"></button>
                        </div>
                        <div className="wh-data-location-item">
                            <span>New Castle</span>
                            <button className="btn"></button>
                        </div>
                        <div className="wh-data-location-item">
                            <span>Edinburgh</span>
                            <button className="btn"></button>
                        </div>
                        <div className="wh-data-location-item">
                            <span>Aberdeen</span>
                            <button className="btn"></button>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-submit">
                        <button className="wh-data-submit-btn btn" onClick={this.onSubmit}>
                            Commit Data
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;