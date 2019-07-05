import React from 'react';
import './App.css';
import Heading from './components/Heading';
import QuoteAdder from './components/QuoteAdder';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className='App'>
      <Heading />
      <QuoteAdder />
      <Quotes />
    </div>
  );
}

export default App;
