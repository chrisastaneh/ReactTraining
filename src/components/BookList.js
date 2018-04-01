"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import BookActions from '../actions/bookActions';


export class BookList extends React.Component{

    createBookRow(book){
        return (
            <tr key={book.id}>
                <td> {book.id} </td>
                <td> {book.title} </td>
                <td> {book.author} </td>
            </tr>
        );
    }

    componentWillMount(){
        BookActions.readBooks();
    }

    render() {
        return(
            <div>
                <h1>Books</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bookList.map(this.createBookRow, this)}
                    </tbody>    
                </table>
            </div>
        );
    }
}

BookList.propTypes = {
    bookList: PropTypes.array.isRequired
};



