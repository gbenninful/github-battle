var React = require('react');
var PropTypes = require('prop-types');

function PlayerPreview(props) {
    var {
        avatar,
        username,
        onReset,
        id
    } = props;

    return (
        <div>
            <div className="column">
                <img
                    className="avatar"
                    src={avatar}
                    alt={username}
                />
                <h2 className="reset">@{username}</h2>
            </div>
            <button
                className="reset"
                onClick={onReset.bind(null, id)}>
                Reset
            </button>
        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
}

module.exports = PlayerPreview;