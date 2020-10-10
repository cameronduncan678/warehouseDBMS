import React from 'react';

class Dashboard extends React.Component{
    render(){
        return(
            <main className="section red">
                <section className="wh-dashboard-container">
                    <div className="row">
                        <div className="col s6">
                            <div className="row section blue"></div>
                            <div className="row section blue"></div>
                        </div>
                        <div className="col s6">
                            <div className="row section green"></div>
                            <div className="row section green"></div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

}

export default Dashboard;