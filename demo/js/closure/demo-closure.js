import React from "react";
/**
 * 引用的变量可能发生变化
 */
const TestClosure = () => {
  console.log("TestClosure render...");

  const outer = function() {
    var result = [];
    for (var i = 0; i < 10; i++) {
      result[i] = function() {
        console.log(`outer--${i}`);
      };
    }
    return result;
  };
  const data = outer();
  data.map(item => item());

  const outer2 = function() {
    var result = [];
    for (var i = 0; i < 10; i++) {
      result[i] = (function(num) {
        return function() {
          // 此时访问的num，是上层函数执行环境的num，数组有10个函数对象，每个对象的执行环境下的number都不一样
          console.log(`outer2--${num}`);
        };
      })(i);
    }
    return result;
  }
  const data2 = outer2();
  data2.map(item => item());

  return <div />;
};

export default TestClosure;
