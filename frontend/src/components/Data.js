import React from 'react';

class Data extends React.Component {
    render() {
        return (
            <div className="wh-datapacket">
                <div className="wh-data-name section red"></div>
                <div className="wh-data-deadline section purple"></div>
                <div className="wh-data-location section green"></div>
                <div className="wh-data-location-selection section blue"></div>
                <div className="wh-data-suibmit section cyan"></div>
            </div>
        )
    }
}

export default Data;