import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    navRollout = () => {
        if (!jQuery('#headerNavItems').is(':visible')) {
            jQuery('#headerNavItems').removeClass('inactive');
            jQuery('#headerNavItems').addClass('active');
        }
        else if (jQuery('#headerNavItems').is(':visible')) {
            jQuery('#headerNavItems').removeClass('active');
            jQuery('#headerNavItems').addClass('inactive');
        }
    }

    render() {
        return (
            <div id="warehouseHeader" className="Header">
                <header className="wh-header">
                    <div className="wh-header-logo">
                        <i className="fas fa-warehouse wh-header-logo-icon"></i>
                        <span className="wh-header-logo-text">Warehouse</span>
                    </div>
                    <div className="wh-header-nav-icon">
                        <i className="fas fa-bars" onClick={this.navRollout}></i>
                    </div>
                    <div id="headerNavItems" className="wh-header-nav inactive">
                        <Link to="/">
                            <div className="wh-header-item">Dashboard</div>
                        </Link>
                        <Link to="/database">
                            <div className="wh-header-item">Database</div>
                        </Link>
                        <Link to="/locations">
                            <div className="wh-header-item">Locations</div>
                        </Link>
                        <Link to="/reports">
                            <div className="wh-header-item">Reports</div>
                        </Link>
                        <div className="wh-header-user">John Smith</div>
                        <div className="wh-header-logout">
                            <button className="btn">Log Out</button>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;