import React, { useState, useEffect, useRef } from "react";

/**
 * 相当于全局变量
 */
const TestRef = () => {
  console.log("Hook render...");

  // count可随时间的增加
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  useEffect(() => {
    console.log("use effect...", count);
    const timer = setInterval(() => {
      console.log("timer...count:", countRef.current);
      setCount(++countRef.current);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>update count </button>
    </div>
  );
};

export default TestRef;
