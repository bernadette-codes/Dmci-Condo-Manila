const React = require('react'),
    ReactRouter = require('react-router-dom'),
    Router = ReactRouter.BrowserRouter,
    Route = ReactRouter.Route,
    Switch = ReactRouter.Switch,
    // Modules
    NavBar = require('./Menu/Nav'),
    ContactModal = require('./Contact/ContactModal'),
    Landing = require('./Landing'),
    CitySection = require('./CitySection'),
    GuideSection = require('./GuideSection'),
    AboutSection = require('./AboutSection');

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />

                    <ContactModal />

                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/Properties' component={CitySection} />
                        <Route exact path='/Buyersguide' component={GuideSection} />
                        <Route exact  path='/About' component={AboutSection} />
                        <Route render={ function () {
                            return <p>Not Found</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = Main;
