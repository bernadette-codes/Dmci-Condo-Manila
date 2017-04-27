const React = require('react');
import { HashLink as Link } from 'react-router-hash-link';

function Footer () {
    return (
        <footer className="container-fluid text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <h2 className="invisible">DMCI</h2>
                        <img src="app/img/dmci-logo.jpg" alt="DMCI Homes" className="img-responsive" />
                            <h3>Head Office</h3>
                            <address>
                                <strong>DMCI Homes Corporate Center </strong><br />
                                1321 Apolinario St.<br />
                                Bangkal, Makati City
                            </address>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <h2>Contact</h2>
                        <p className="text-left">For More Info and Tripping,<br />
                            <strong>Contact:</strong>&nbsp; Lorna C. Estacio<br />
                            <small>Real Estate Broker License No. 26579</small><br />
                            <strong>Landline:</strong>&nbsp; 511-0556, 788-6894<br />
                            <strong>Globe:</strong>&nbsp; 0927-949-2217<br />
                            <strong>Sun:</strong>&nbsp; 0933-859-1720<br />
                            <strong>Email:</strong>&nbsp; lcestacio1@gmail.com
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <h2>Locations</h2>
                        <div className="last row">
                            <div className="col-xs-6">
                                <ul className="text-left">
                                    <li><Link to='/Properties#lasPinasSection'>Las Piñas</Link></li>
                                    <li><Link to='/Properties#makatiSection'>Makati</Link></li>
                                    <li><Link to='/Properties#mandaluyongSection'>Mandaluyong</Link></li>
                                    <li><Link to='/Properties#muntinlupaSection'>Muntinlupa</Link></li>

                                </ul>
                            </div>
                            <div className="col-xs-6">
                                <ul className="rightLoc text-left">
                                    <li><Link to='/Properties#paranaqueSection'>Parañaque</Link></li>
                                    <li><Link to='/Properties#pasaySection'>Pasay</Link></li>
                                    <li><Link to='/Properties#pasigSection'>Pasig</Link></li>
                                    <li><Link to='/Properties#taguigSection'>Taguig</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p><small>Copyright © 2017&nbsp; All rights reserved.&nbsp;&nbsp;
                &nbsp;<span>Designed and created by:&nbsp; <a href="http://www.bernadetteengleman.com/" target="_blank">Bernadette Engleman&#128279;</a></span>
            </small></p>
        </footer>
    )
}

module.exports = Footer;
