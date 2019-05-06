import React, { Component } from "react";
import { Form, Dropdown } from "semantic-ui-react";
import { debounce } from "lodash";

class SearchBookForm extends Component {
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

  fetchOptions = debounce(query => {
    if (query) {
      this.setState({ loading: true });
    }
  }, 1000);

  render() {
    const { query, loading, options } = this.state;

    return (
      <Form>
        <Dropdown
          search
          fluid
          selection
          clearable
          searchQuery={query}
          placeholder="Search for a book by title"
          options={options}
          onSearchChange={this.onSearchChange}
          loading={loading}
        />
      </Form>
    );
  }
}

export default SearchBookForm;
