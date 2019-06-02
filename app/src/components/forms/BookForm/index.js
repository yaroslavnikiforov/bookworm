import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Segment, Grid, Image } from "semantic-ui-react";
import { isEmpty } from "lodash";
import InlineError from "../../messages/InlineError";

const DEFAULT_COVER_INDEX = 0;

class BookForm extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    book: PropTypes.shape({
      goodreadsId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      covers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      pages: PropTypes.number
    }).isRequired
  };

  state = {
    loading: false,
    errors: {}
  };

  static getDerivedStateFromProps(props, state) {
    if (props.book !== state.data) {
      return {
        data: props.book,
        coverIndex: DEFAULT_COVER_INDEX
      };
    }

    return null;
  }

  onChange = e => {
    const target = e.target;

    this.setState(state => ({
      data: { ...state.data, [target.name]: target.value }
    }));
  };

  onChangeNumber = e => {
    const target = e.target;

    this.setState(state => ({
      data: { ...state.data, [target.name]: parseInt(target.value, 10) }
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (isEmpty(errors)) {
      this.setState({ loading: true });

      this.props.submit(this.state.data).catch(err =>
        this.setState({
          errors: err.response.data.errors,
          loading: false
        })
      );
    }
  };

  changeCover = () => {
    const { coverIndex, data } = this.state;

    const newIndex = coverIndex + 1 >= data.covers.length ? 0 : coverIndex + 1;

    this.setState({ coverIndex: newIndex });
  };

  validate = data => {
    const errors = {};

    if (!data.title) errors.title = "Can't be blank";
    if (!data.author) errors.author = "Can't be blank";
    if (!data.pages) errors.pages = "Can't be blank";

    return errors;
  };

  render() {
    const { data, coverIndex, errors, loading } = this.state;

    console.log(data.pages);

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={Boolean(errors.title)}>
                  <label htmlFor="title">Book title</label>

                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={data.title}
                    onChange={this.onChange}
                  />

                  {errors.title && <InlineError text={errors.title} />}
                </Form.Field>

                <Form.Field error={Boolean(errors.author)}>
                  <label htmlFor="title">Book author</label>

                  <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Author"
                    value={data.author}
                    onChange={this.onChange}
                  />

                  {errors.author && <InlineError text={errors.author} />}
                </Form.Field>

                <Form.Field error={Boolean(errors.pages)}>
                  <label htmlFor="title">Book pages</label>

                  <input
                    disabled={data.pages === undefined}
                    type="text"
                    id="pages"
                    name="pages"
                    placeholder="Pages"
                    value={data.pages !== undefined ? data.pages : "Loading..."}
                    onChange={this.onChangeNumber}
                  />

                  {errors.pages && <InlineError text={errors.pages} />}
                </Form.Field>
              </Grid.Column>

              <Grid.Column>
                <Image size="small" src={data.covers[coverIndex]} />

                {data.covers.length > 1 && (
                  <button tabIndex={0} onClick={this.changeCover}>
                    Another cover
                  </button>
                )}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Button primary>Save</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

export default BookForm;
