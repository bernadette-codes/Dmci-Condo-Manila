var React = require('react');

class NavBar extends React.Component {
    render() {
        return (
            <nav className="container-fluid navbar navbar-main" data-spy="affix" id="navMain">
                <div className="wrap1">
                    <ul className="nav navbar-nav">
                        <li><a href="#propertiesSection">PROPERTIES</a></li>
                        <li><a href="#buyersGuideSection">BUYERS GUIDE</a></li>
                        <li><a href="#aboutSection">ABOUT</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

module.exports = NavBar;
