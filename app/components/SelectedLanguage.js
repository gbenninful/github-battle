var React = require('react');
var PropTypes = require('prop-types');

const SelectLanguage = (props) => {
    let { selectedLanguage, onSelect } = props;

    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className="languages">
            <p>Selected Lanuage: {selectedLanguage}</p>
            {
                languages.map(function (language) {
                    return <li key={language}
                        onClick={ onSelect.bind(null, language) }
                        style={ (language === selectedLanguage) ? { color: '#d0021b' } : null }
                    >{ language }</li>
                })
            }
        </ul>
    )
};

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

module.exports = SelectLanguage;