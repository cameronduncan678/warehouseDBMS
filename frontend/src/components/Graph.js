import React from 'react';

import GraphCard from './GraphCard';

class Graph extends React.Component {
    render() {
        const graphCards = this.props.data.map((location, index) => (
            <div key={location.locationId}>
                <GraphCard data={location} id={index} />
            </div>

        ))
        return (
            <div className="wh-graphCard">

                <div className="wh-graphcard-graph">
                    {graphCards}
                </div>
            </div>
        )
    }
}

export default Graph;