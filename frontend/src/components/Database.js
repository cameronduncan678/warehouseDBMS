import React from 'react';

//Components
import Filter from './Filter';
import Table from './Table';
import NewData from './NewData';

class Database extends React.Component{
    render(){
        return(
            <div className="wh-database-container">
                <div className="section">
                    <div className="wh-database-filter">
                        <h4 className="wh-database-filter-title">Filter</h4>
                        <Filter />
                    </div>
                </div>
                <div className="section">
                    <Table />
                </div>
                <div className="section">
                    <NewData />
                </div>
            </div>
        );
    }
}

export default Database;