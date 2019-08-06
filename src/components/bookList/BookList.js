import React,{ Component } from 'react';
import {connect} from 'react-redux';
import BookItem from './bookItem';
import './bookItem.css'

class BookList extends Component {

  render() {
    const { bookList } = this.props;
    return (
      <div className="ui cards book-list-container">
        {
          bookList.map(book => (
            <BookItem key ={book.isbn} book = {book} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    bookList:state.bookList
  };
}

export default connect(mapStateToProps)(BookList);
