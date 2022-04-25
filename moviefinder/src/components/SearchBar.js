import React from 'react';

class SearchBar extends React.Component {
    state = {location: ''}

    onChange = event=> {
        this.setState({location: event.target.value})
    }
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.location);
    }
    render () {
    return (
        <div>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <div style={{textAlign: 'center'}} >
                        <h3><label>Enter a movie to search for</label></h3></div>
                    <input type="text" value={this.state.location} onChange={this.onChange} />
                </div>
            </form>
        </div>
    )}
}

export default SearchBar
