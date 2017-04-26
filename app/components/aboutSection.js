const React = require('react'),
    ContactBox = require('./ContactBox'),
    DMCILogo = require('./DmciLogo'),
    Footer = require('./Footer');

class AboutSection extends React.Component {
    render() {
        const features = [
            {
                "feature": "QUALITY",
                "description": "DMCI Homes provides one (1) year quality warranty that covers repairs, free of charge, on any workmanship defects of the unit. Fast and reliable, the company's construction of the residential buildings and turnover of units are within 6 to 12 months only.",
                "more": []
            }, {
                "feature": "RESORT LIVING",
                "description": "DMCI Homes communities are equipped with complete resort amenities that include:",
                "more": ["A clubhouse with function rooms, a bar, KTV room, and view deck", "Adult and kiddie swimming pools", "Basketball and badminton courts", "Well-landscaped open areas, parks, and playground", "Jogging and biking paths"]
            }, {
                "feature": "WORRY-FREE LIVING",
                "more": ["24-hour security service", "Gated entrance and perimeter fence", "Overhead water tank, deep well, and underground cistern", "Covered bridge way connecting the residential building to the car park", "Individual drying area at the roof deck", "Provision for CATV and telephone lines"]
            }, {
                "feature": "THEMED DEVELOPMENT",
                "description": "DMCI Homes residential communities are created with distinct architectural design concepts that show first class development features. Choose from:",
                "more": ["Asian", "Mediterranean", "Modern Contemporary styled communities"]
            }, {
                "feature": "MODERN IN-CITY LIVING",
                "description": "DMCI Homes residential communities are located in close proximity to major business and commercial centers of Makati, Ortigas, and the Bonifacio Global City, letting you enjoy modern living at its best. Strategically situated within the vicinity of malls, schools, hospitals, and government offices, DMCI Homes’ residential communities make living hassle-free and convenient. DMCI Homes residential communities are easily accessible by public transportation.",
                "more": []
            }
        ];

        return (
            <div>
                <section id="aboutSection" className="container-fluid">
                    <ContactBox />

                    <div className="dmciSection">
                        <DMCILogo />

                        <h2 className="text-left" style={{ background: "url('app/img/icons/about.png') 10px 15px/25px no-repeat padding-box" }}>About DMCI</h2>
                        <hr />

                        <img src="app/img/condoImg/resort.jpg" alt="Pool" className="img-responsive designImg" />
                        <img src="app/img/condoImg/playarea.jpg" alt="Play Area" className="img-responsive designImg" />
                        <img src="app/img/condoImg/gym.jpg" alt="Play Area" className="img-responsive designImg" />

                        <div>
                            {features.map(function(list) {
                                return (
                                    <div className="info" key={list.feature}>
                                        <h3>{list.feature}</h3>
                                        <p>{list.description}</p>
                                        <ul>
                                            {list.more.map(function(item) {
                                                return (
                                                    <li key={item}>{item}</li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

module.exports = AboutSection;
