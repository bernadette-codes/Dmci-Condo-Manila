var React = require('react');

class Landing extends React.Component {
    render() {
        return (
            <header id="first-slider">
                <h1>DMCI Homes</h1>

                <div id="carousel-generic" className="carousel slide carousel-fade">
                    <div className="carousel-inner" role="listbox">
                        <div className="item active slide1" style={{ backgroundImage: "url('app/img/landingPage/sienaPark2-paranaque.jpg')" }}>
                            <div className="container">
                                <p data-animation="animated bounceInUp">Your dream home can be real...</p>
                            </div>
                        </div>
                        <div className="item slide2" style={{ backgroundImage: "url('app/img/landingPage/cedarCrest-taguig.jpg')" }}>
                            <div className="container">
                                <p data-animation="animated bounceInDown" className="last">Make it happen!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

module.exports = Landing;
