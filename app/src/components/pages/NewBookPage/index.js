import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import SearchBookForm from "../../forms/SearchBookForm";
import BookForm from "../../forms/BookForm";

class NewBookPage extends Component {
  static propTypes = {};

  state = {
    book: null
  };

  onBookSelect = book => this.setState({ book });

  addBook = () => console.log("sayonara");

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

export default NewBookPage;
