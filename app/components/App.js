var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Battle = require('./Battle');
var Home = require('./Home');
var Results = require('./Results');
var Nav = require('./Nav');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path="/battle" component={Battle} />
                        <Route exact path="/" component={Home} />
                        <Route path="/popular" component={Popular} />
                        <Route path="/battle/results" component={Results} />
                        <Route render={
                            function () {
                                return <div>Sorry, the page you requested does not exist.</div>
                            }
                        } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;
