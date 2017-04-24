var React = require('react');

class ContactBox extends React.Component {
    render() {
        return (
            <div data-target="#contact1" data-toggle="modal" className="call">
                <img src="app/img/icons/call.jpg" alt="Contact" width="70" className="img-responsive" />
                <p>contact</p>
            </div>
        )
    }
}

module.exports = ContactBox;
