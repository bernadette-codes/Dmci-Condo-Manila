const React = require('react'),
    ReactDOM = require('react-dom'),
    Main = require('./components/Main');
require('./scss/styles.scss');


ReactDOM.render(
    <Main />, document.getElementById('mainContent')
);
