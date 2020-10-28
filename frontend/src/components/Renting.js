import React from 'react';

import Items from './Items';
import DataPacket from './Datapacket';

class Renting extends React.Component {

    render() {

        return (
            <main className="wh-Items section">
                <section className="section">
                    <div className="row">
                        <div className="col s12 l6">
                            <Items items={this.props.location.state.rentingData.items} />
                        </div>
                        <div className="col s12 l6">
                            <DataPacket data={this.props.location.state.rentingData} />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
};

export default Renting;