var React = require('react');
var PlayerInput = require('./PlayerInput');
var PlayerPreview = require('./PlayerPreview');
var Link = require('react-router-dom').Link;
var Results = require('./Results');

class Battle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset(id) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null
            return newState;
        })
    }

    handleSubmit(id, username) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        })
    }

    render() {
        var playerOneName = this.state.playerOneName;
        var playerTwoName = this.state.playerTwoName;
        var playerOneImage = this.state.playerOneImage;
        var playerTwoImage = this.state.playerTwoImage;
        var match = this.props.match;

        return (
            <div>
                <div className="row">
                    {!playerOneName &&
                        <PlayerInput
                            id="playerOne"
                            label="Player One"
                            username={playerOneName}
                            onSubmit={this.handleSubmit} />
                    }

                    {playerOneImage &&
                        <PlayerPreview
                            avatar={playerOneImage}
                            username={playerOneName}
                            id="playerOne"
                            onReset={this.handleReset}
                        />
                    }

                    {!playerTwoName &&
                        <PlayerInput
                            id="playerTwo"
                            label="Player Two"
                            username={playerTwoName}
                            onSubmit={this.handleSubmit} />
                    }

                    {playerTwoImage &&
                        <PlayerPreview
                            avatar={playerTwoImage}
                            username={playerTwoName}
                            id="playerTwo"
                            onReset={this.handleReset}
                        />
                    }
                </div>

                {(playerOneImage && playerTwoImage) &&
                    <Link
                        className="button"
                        to={{
                            pathname: match.url + '/results',
                            search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                        }}>
                        Battle
                    </Link>
                }
            </div>
        )
    }
}

module.exports = Battle;