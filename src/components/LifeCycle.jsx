import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Component is being created in constructor");
  }

  componentDidMount() {
    console.log("Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `Component updated from ${prevState.count} to ${this.state.count}`
    );
  }

  componentWillUnmount() {
    console.log("Component is unmounted");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h2>Count using LifeCycle</h2>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Update count</button>
      </>
    );
  }
}

export default LifeCycle;
