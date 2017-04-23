var React = require('react'),
    Landing = require('./landing'),
    NavBar = require('./nav'),
    ContactModal = require('./contactModal');

class Main extends React.Component {
    render() {
        return (
            <div>
                <Landing />

                <NavBar />

                <ContactModal />
            </div>
        )
    }
}

module.exports = Main;
