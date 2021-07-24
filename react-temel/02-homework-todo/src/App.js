import React from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
