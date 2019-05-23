import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";
import { debounce } from "lodash";

class SearchBookForm extends Component {
  static propTypes = {
    onBookSelect: PropTypes.func.isRequired
  };

  state = {
    query: "",
    options: [],
    loading: false
  };

  onSearchChange = (e, data) => {
    this.setState({ query: data.searchQuery }, () =>
      this.fetchOptions(this.state.query)
    );
  };

  onChange = (e, data) => {
    this.setState({ query: data.value });

    this.props.onBookSelect(this.state.books[data.value]);
  };

  fetchOptions = debounce(
    query => {
      if (query) {
        this.setState({ loading: true });

        axios
          .get(`/api/books/search?q=${query}`)
          .then(res => res.data.books)
          .then(books => {
            const options = [];
            const booksHash = {};

            books.forEach(book => {
              booksHash[book.title] = book;
              options.push({
                key: book.goodreadsId,
                value: book.title,
                text: book.title
              });

              this.setState({ loading: false, options, books: booksHash });
            });
          });
      }
    },
    1000,
    {
      leading: true,
      trailing: false
    }
  );

  render() {
    const { query, loading, options } = this.state;

    return (
      <Form>
        <Dropdown
          search
          fluid
          selection
          clearable
          searchQuery={String(query)}
          placeholder="Search for a book by title"
          options={options}
          onSearchChange={this.onSearchChange}
          onChange={this.onChange}
          loading={loading}
        />
      </Form>
    );
  }
}

export default SearchBookForm;
