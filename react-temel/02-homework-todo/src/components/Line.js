import React from 'react';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render() {
    return (
      <li
        className="list-item"
        onMouseOver={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false })}
      >
        <div
          className="line"
          onClick={(event) => {
            const selected = event.target;
            selected.classList.toggle('done');
          }}
        >
          {this.props.todo}
        </div>
        <span
          onClick={() => this.props.parentCallback(this.props.todo)}
          style={{
            marginLeft: '10px',
            display: this.state.show ? 'block' : 'none',
          }}
        >
          X
        </span>
      </li>
    );
  }
}

export default Line;
