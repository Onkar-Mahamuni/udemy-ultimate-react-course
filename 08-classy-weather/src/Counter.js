import React from "react";

class Counter extends React.Component {
  constructor(props) {
    //We need ctor to add state in classes
    super(props); // Calls parent's constructor

    this.state = { count: 5 }; //Defining a state
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleDecrement.bind(this);
    // We need to bind this instance with the method again
  }

  handleDecrement() {
    this.setState((currState) => {
      return { count: currState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((currState) => {
      return { count: currState.count + 1 };
    });
  }

  render() {
    // Each class should have a render method which returns jsx
    // JSX works same as in functional components
    // Render methos should not content larger render logic
    const date = new Date("June 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleIncrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>{" "}
        {/* Utilizing state  */}
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
