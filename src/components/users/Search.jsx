import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
    email: ""
  };
  onChange = e => this.setState({ [e.target.type]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            email="email"
            type="text"
            placeholder="search user"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block "
          />
        </form>
      </div>
    );
  }
}

export default Search;
