import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../../messages/ConfirmEmailMessage";
import AddBookCta from "../../ctas/AddBookCta";
import { allBooksSelector } from "../../../reducers/books";
import { fetchBooks } from "../../../actions/books";

class DashboardPage extends Component {
  static propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };

  componentDidMount = () => this.props.fetchBooks();

  render() {
    const { isConfirmed, books } = this.props;

    return (
      <div>
        {!isConfirmed ? <ConfirmEmailMessage /> : null}

        {books.length === 0 ? <AddBookCta /> : <p>you have saved books</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isConfirmed: Boolean(state.user.confirmed),
  books: allBooksSelector(state)
});

export default connect(
  mapStateToProps,
  { fetchBooks }
)(DashboardPage);
