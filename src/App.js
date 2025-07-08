import React from 'react';
import SessionList from './components/SessionList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>⚽ Football Sessions</h1>
      <SessionList />
    </div>
  );
}

export default App;
