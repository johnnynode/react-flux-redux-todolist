import React, {Component} from 'react';

class Header extends Component {
  static get defaultProps() {
    return {
      name: "Johnny",
      bookCount: 0
    }
  }

  render() {
    const {name, bookCount} = this.props;
    return (
      <div>
        <h1>My book list</h1>
        <h3>Hello {name} , you have {bookCount} {bookCount > 1 ? "books" : "book"} left to read!</h3>
      </div>
    )
  }
}

export default Header;