var React = require('react');
var RepoGrid = require('./RepoGrid');
var SelectLanguage = require('./SelectedLanguage');
var api = require('../utils/api');

class Popular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(language) {
        this.setState(function () {
            return {
                selectedLanguage: language,
                repos: null
            };
        })

        api.fetchPopularRepos(language)
            .then(function (repos) {
                this.setState(function () {
                    return {
                        repos: repos
                    }
                })
            }.bind(this))
            .catch(function (error) {
                console.log('Inside componentDidMount. Unable to get Popular Repos: ', error)
            })
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    render() {
        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
                {
                    (!this.state.repos) ? <p>LOADING...</p> :
                        <RepoGrid repos={this.state.repos} />
                }
            </div>
        )
    }
}

module.exports = Popular;