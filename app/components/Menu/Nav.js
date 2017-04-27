const React = require('react'),
    NavLink = require('react-router-dom').NavLink;

function NavBar () {
    return (
    <nav className="container-fluid navbar navbar-main" id="navMain">
        <div className="wrap1">
            <ul className="nav navbar-nav">
                <li style={{ display: "none" }}><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
                <li><NavLink activeClassName='active' to='/Properties'>PROPERTIES</NavLink></li>
                <li><NavLink activeClassName='active' to='/Buyersguide'>BUYERS GUIDE</NavLink></li>
                <li><NavLink activeClassName='active' to='/About'>ABOUT</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}

module.exports = NavBar;
