var React = require('react');
var PropTypes = require('prop-types');

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState(function () {
            return {
                username: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.username)
    }

    render() {
        return (
            <form className="column" onSubmit={ this.handleSubmit }>
                <label className="header" htmlFor="username">{this.props.label}</label>
                <input
                    type="text"
                    placeholder="github username"
                    autoComplete="off"
                    value={this.state.username}
                    onChange={this.handleChange}
                />

                <button
                    className="button"
                    type="submit"
                    disabled={!this.state.username}
                >
                    Submit
             </button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    username: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

module.exports = PlayerInput;