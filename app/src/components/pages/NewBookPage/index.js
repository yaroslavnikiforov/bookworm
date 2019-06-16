import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import { createBook } from "../../../actions/books";
import SearchBookForm from "../../forms/SearchBookForm";
import BookForm from "../../forms/BookForm";

class NewBookPage extends Component {
  static propTypes = {
    createBook: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    book: null
  };

  onBookSelect = book => {
    this.setState({ book });

    if (book) {
      axios
        .get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
        .then(res => res.data.pages)
        .then(pages => this.setState({ book: { ...book, pages } }));
    }
  };

  addBook = book =>
    this.props
      .createBook(book)
      .then(() => this.props.history.push("/dashboard"));

  render() {
    const { book } = this.state;

    return (
      <Segment>
        <h1>Add new book to your collection</h1>

        <SearchBookForm onBookSelect={this.onBookSelect} />

        {book && <BookForm submit={this.addBook} book={book} />}
      </Segment>
    );
  }
}

export default connect(
  null,
  { createBook }
)(NewBookPage);
