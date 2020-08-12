import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
// import TestState from "./demo/hook/demo-useState";
// import TestEffect from "./demo/hook/demo-useEffect";
// import TestRef from "./demo/hook/demo-useRef";
// import TestReducer from "./demo/hook/demo-useReducer";
// import TestReducer2 from "./demo/hook/demo-useReducer2";
import TestClosure from "./demo/js/closure/demo-closure";

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
        <p>good good study, day day up!</p>
        <p>study hard, improve every day!</p>
        {/* <TestReducer2 initialCount={0} />
        <br /> */}
        {/* <TestReducer /> */}
        {/* <TestRef /> */}
        {/* <TestEffect /> */}
        {/* <TestState /> */}
        <TestClosure />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
