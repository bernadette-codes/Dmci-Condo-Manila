const React = require('react'),
    ContactBox = require('./ContactBox'),
    DMCILogo = require('./DmciLogo'),
    Footer = require('./Footer');

class Condos extends React.Component {
    render() {
        return (
            <div>
                <section id="mainSection" className="container-fluid">
                    <ContactBox />

                    <div className="propSection">
                        <DMCILogo />

                        <h2 className="text-left" style={{ background: "url('app/img/icons/condoLogo.png') 0 3px/50px no-repeat padding-box" }}>Tivoli Garden</h2>
                        <h3><strong>Address:</strong>&nbsp; Coronoado Street, Brgy. Hulo, Mandaluyong City</h3>

                        <hr />
                        <img src="../img/propertiesPhotos/mandaluyong-tivoliGarden/buildings.jpg" alt="Tivoli Garden" className="condoMainImg img-responsive" />
                    </div>
                </section>

                <section id="unitsSection" className="container-fluid">
                    <ContactBox />

                    <div className="propSection">
                        <h3 className="text-left" style={{ background: "url('app/img/icons/condoLogo.png') 0 3px/50px no-repeat padding-box" }}>Units</h3>
                        <hr />

                        <div className="row text-center" id="units">
                            <div className="col-lg-6 col-md-12">
                                <img src="../img/propertiesPhotos/mandaluyong-tivoliGarden/units/1-BedroomEnd.jpg" alt="1-Bedroom End" className="img-responsive" />
                                <p>Price Range:&nbsp; ₱2,386,000 - ₱2,725,000</p>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-bordered table-condensed table-striped text-center">
                                <thead>
                                <tr>
                                    <th>Units</th>
                                    <th>Floor Area</th>
                                    <th>Price Range</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Studio Inner</td>
                                    <td>25 sqm.</td>
                                    <td>₱1,831,000 - ₱2,749,000</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section id="facilitiesSection" className="container-fluid">
                    <ContactBox />

                    <div className="propSection">
                        <h3 className="text-left" style={{ background: "url('app/img/icons/condoLogo.png') 0 3px/50px no-repeat padding-box" }}>Facilities</h3>
                        <hr />

                        <div className="row text-center" id="grid">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                                <img src="../img/propertiesPhotos/mandaluyong-tivoliGarden/masterplan.jpg" alt="Master Plan" className="img-responsive" width="200" />
                                <h4>Master Plan</h4>
                            </div>
                        </div>
                        <div id="overlay"></div>
                        <div id="overlayContent">
                            <img id="imgBig" src="" alt="Tivoli Garden" />
                        </div>

                        <div className="row text-left otherFacility">
                            <div className="col-sm-6 col-xs-12">
                                <h5>Other Facilities:</h5>
                                <ul>
                                    <li>Leisure Pool</li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <h5>Building Features:</h5>
                                <ul>
                                    <li>Sky Patio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="locationSection" className="container-fluid">
                    <ContactBox />

                    <div className="propSection">
                        <h3 className="text-left" style={{ background: "url('app/img/icons/locationIcon.png') 10px 5px/25px no-repeat padding-box" }}>Location</h3>
                        <hr />

                        <div id="map" style="height:400px"></div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

module.exports = Condos;
