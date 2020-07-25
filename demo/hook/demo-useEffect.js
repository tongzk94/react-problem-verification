import React, { useState, useEffect } from "react";

const TestEffete = () => {
  console.log("Hook render...");

  // 点击事件的count可以随点击次数增加
  // 定时器拿到的count始终为0-->1
  const [count, setCount] = useState(0);
  useEffect(() => {
    // use effect... 0
    console.log("use effect...", count);
    const timer = setInterval(() => {
      // timer...count: 0
      console.log("timer...count:", count);
      setCount(count + 1);
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

export default TestEffete;
