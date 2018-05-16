import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Title from './Title';
import './index.css';

function App() {
  return (
    <div className="container">
      <Title />
      <Game />
    </div>
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
