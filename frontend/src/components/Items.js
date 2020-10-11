import React from 'react';

//Components
import DataItems from './DataItems';
import Data from './Data';

class Items extends React.Component{
    render(){
        return(
            <main className="wh-Items section">
                <section className="section">
                    <div className="row">
                        <div className="col s12 l6">
                            <DataItems />
                        </div>
                        <div className="col s12 l6">
                            <Data />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Items;