import React from 'react';

class QuoteAdder extends React.Component {
  state = {
    text: '',
    author: ''
  };

  render() {
    const { text, author } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='text'>New Quote: </label>
        <input
          id='text'
          type='text'
          value={text}
          onChange={this.handleChange}
        />
        <label htmlFor='author'>Author: </label>
        <input
          id='author'
          type='text'
          value={author}
          onChange={this.handleChange}
        />
        <button type='submit'>Sumbit</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { text, author } = this.state;
    const { addQuote } = this.props;
    const newQuote = { text, author };
    addQuote(newQuote);
    this.setState({
      text: '',
      author: ''
    });
  };

  handleChange = event => {
    const { value, id } = event.target;
    this.setState({
      [id]: value
    });
  };
}

export default QuoteAdder;
