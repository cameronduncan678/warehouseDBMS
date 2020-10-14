import React from 'react';

//Components
import GraphCard from './GraphCard';
import DashStats1 from './DashStats1';
import DashStats2 from './DashStats2';

class Dashboard extends React.Component {
    render() {
        return (
            <main className="section">
                <section className="wh-dashboard-container">
                    <div className="row">
                        <div className="col s12 l6">
                            <div className="row section">
                                <div className="col s6">
                                    <GraphCard />
                                </div>
                                <div className="col s6">
                                    <GraphCard />
                                </div>
                            </div>
                            <div className="row section">
                                <div className="col s6">
                                    <GraphCard />
                                </div>
                                <div className="col s6">
                                    <GraphCard />
                                </div>
                            </div>
                        </div>
                        <div className="col s12 l6">
                            <div className="row section">
                                <div className="col s12">
                                    <DashStats1 />
                                </div>
                            </div>
                            <div className="row section">
                                <div className="col s12">
                                    <DashStats2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

}

export default Dashboard;