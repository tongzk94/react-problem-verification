import React, { useState, memo } from "react";

/**
 * useState的初始值，只在第一次有效
 */
const Child = memo(({ data }) => {
  // rose --- jack
  console.log("child render...", data);
  const [name, setName] = useState(data);
  return (
    <div>
      <div>child</div>
      <div>
        {name} --- {data}
      </div>
    </div>
  );
});

const TestState = () => {
  console.log("Hook render...");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("rose");

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>update count </button>
      <button onClick={() => setName("jack")}>update name </button>
      <Child data={name} />
    </div>
  );
};

export default TestState;
