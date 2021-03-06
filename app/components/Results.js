var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }

    componentDidMount() {
        var players = queryString.parse(this.props.location.search);
        api.battle([
            players.playerOneName,
            players.playerTwoName
        ])
            .then(function (results) {
                console.log('Result...: ', results);
            })
    }

    render() {
        var { error, winner, loser, loading } = this.state;
        var winner = this.state.winner;
        var loser = this.state.loser;
        var error = this.state.error;
        var loading = this.state.loading;

        if (loading) {
            return <p>Loading</p>
        }
        return (
            <div>Results</div>
        )
    }
}

module.exports = Results;