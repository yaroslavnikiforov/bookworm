import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../../messages/ConfirmEmailMessage";
import AddBookCta from "../../ctas/AddBookCta";
import { allBooksSelector } from "../../../reducers/selectors";

const DashboardPage = ({ isConfirmed, books }) => (
  <div>
    {!isConfirmed ? <ConfirmEmailMessage /> : null}

    {books.length === 0 && <AddBookCta />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  isConfirmed: Boolean(state.user.confirmed),
  books: allBooksSelector(state)
});

export default connect(mapStateToProps)(DashboardPage);
