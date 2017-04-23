var React = require('react'),
    ReactDOM = require('react-dom'),
    Landing = require('./components/landing'),
    CitySection = require('./components/citySection'),
    CityProp = require('./components/cityProp'),
    GuideSection = require('./components/guideSection'),
    AboutSection = require('./components/aboutSection'),
    ContactBox = require('./components/contactBox');
require('./index.css');


ReactDOM.render(
    <Landing />, document.getElementById('first-slider')
);
ReactDOM.render(
    <CitySection />, document.getElementById('propertiesSection')
);
ReactDOM.render(
    <CityProp />, document.getElementById('cityprop')
);
ReactDOM.render(
    <GuideSection />, document.getElementById('buyersGuideSection')
);
ReactDOM.render(
    <AboutSection />, document.getElementById('aboutSection')
);
ReactDOM.render(
    <ContactBox />, document.getElementById('contactBox')
);
