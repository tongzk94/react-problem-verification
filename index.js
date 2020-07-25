import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import TestState from "./demo/hook/demo-useState";
import TestEffect from "./demo/hook/demo-useEffect";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <TestState />
        <TestEffect />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
