var React = require('react');

class ContactModal extends React.Component {
    render() {
        return (
            <div id="contact1" className="modal contact fade" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <p className="modal-title">Contact</p>
                        </div>
                        <div className="modal-body">
                            <p className="text-left">
                                <strong>Landline:</strong>&nbsp; 511-0556, 788-6894<br />
                                <strong>Globe:</strong>&nbsp; 0927-949-2217<br />
                                <strong>Sun:</strong>&nbsp; 0933-859-1720
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = ContactModal;


