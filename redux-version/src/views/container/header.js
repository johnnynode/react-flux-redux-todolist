import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../templates/header';

class HeaderContainer extends Component {
    render() {
        const { books } = this.props;
        let bookCount = books.filter((book) => !book.checked).length;
        console.log('this.props');
        console.log(this.props);
        return (
            <Header name="Joh" bookCount={ bookCount }/>
        )
    } 
}

export default connect(
    (state) => ({books: state.books})
)(HeaderContainer);