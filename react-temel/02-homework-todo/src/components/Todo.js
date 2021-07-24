import React from 'react';
import Line from './Line';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], todo: '' };
  }

  handleCallback = (value) => {
    const filteredArray = this.state.todos.filter((a) => a !== `${value}`);
    this.setState({ todos: filteredArray });
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.setState({
            todos: [...this.state.todos, this.state.todo],
          });
          this.setState({ todo: '' });
        }}
      >
        <input
          className="input"
          type="text"
          value={this.state.todo}
          onChange={(event) => this.setState({ todo: event.target.value })}
          placeholder="What needs to be done?"
          autoFocus
        />
        <ul className="list">
          {this.state.todos.map((todo, index) => (
            <Line
              key={index}
              todo={todo}
              parentCallback={this.handleCallback}
            />
          ))}
        </ul>
      </form>
    );
  }
}

export default Todo;
