import React from 'react';

class QuoteAdder extends React.Component {
  state = {
    text: '',
    author: '',
    showMsg: false
  };

  render() {
    const { text, author, showMsg } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='text'>New Quote: </label>
            <input
              id='text'
              type='text'
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='author'>Author: </label>
            <input
              id='author'
              type='text'
              value={author}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Sumbit</button>
        </form>
        {showMsg ? <p>Thanks for adding a quote!</p> : null}
      </section>
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
      author: '',
      showMsg: true
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
