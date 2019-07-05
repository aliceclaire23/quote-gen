import React from 'react';

class Quote extends React.Component {
  state = { currentQuoteIndex: 0 };

  render() {
    const { quotes } = this.props;
    const { currentQuoteIndex } = this.state;
    const selectedQuote = quotes[currentQuoteIndex];

    return (
      <section>
        <p>"{selectedQuote.text}"</p>
        <p>
          <i>~ {selectedQuote.author}</i>
        </p>
        <button onClick={this.updateQuote}>New Quote</button>
      </section>
    );
  }

  updateQuote = () => {
    const { quotes } = this.props;
    this.setState({
      currentQuoteIndex: Math.floor(Math.random() * quotes.length)
    });
  };
}

export default Quote;
