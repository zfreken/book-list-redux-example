import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {selectBook,deleteBook} from '../../Actions';


class BookItem extends Component {

  render(){
    const { book } = this.props;
    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {book.author}
          </div>
          <div className="description">
            {book.subtitle}
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button"
                  onClick={ ()=> { this.props.selectBook(book); }}  >Ekle</div>
            <div className="ui basic red button"
                  onClick={ ()=> { this.props.deleteBook(book); }} >Çıkar</div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(null,{selectBook,deleteBook})(BookItem);
