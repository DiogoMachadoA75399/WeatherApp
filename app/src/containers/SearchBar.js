import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form>
                        <input type="text" id="location" placeholder="Enter location" id="searchBar" className="text-center typeahead"
                            value={this.state.value} onChange={this.onChange} source={['a', 'b']}/>
                    </form>
                </div>
            </div>



        );
    }

}


export default SearchBar;