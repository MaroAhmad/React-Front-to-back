import React, { Component } from "react";
import PropTypes from 'prop-types'


export class Search extends Component {
  state = { text: '' };

  
  static propTypes = {
    searchUsers:PropTypes.func.isRequired
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="contanier">
        <form
          onSubmit={this.onSubmit}
          className="form"
          class="d-flex"
          role="search"
        >
          <input
            class="form-control me-3 p-2 mt-1"
            name="text"
            type="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success me-3 p-2 mt-1"
            value="Search"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
