import React from "react";

const TestClosure = () => {
  console.log("Hook render...");

  const outer = function() {
    var result = [];
    for (var i = 0; i < 10; i++) {
      result[i] = function() {
        console.info(i);
      };
    }
    return result;
  };
  const data = outer();

  return <div>{data}</div>;
};

export default TestClosure;
