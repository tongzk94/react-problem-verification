import React from "react";

/**
 * 闭包问题
 * 1. 引用的变量可能发生变化
 * 2. this指向问题
 * 3. 使用闭包实现递归
 */
const TestClosure = () => {
  console.log("TestClosure render...");

  const outer = function() {
    var result = [];
    for (var i = 0; i < 10; i++) {
      result[i] = function() {
        // 全为10
        console.log(`outer--${i}`);
      };
    }
    return result;
  };
  const data = outer();
  data.map(item => item());

  const outer3 = function() {
    var result = [];
    for (let i = 0; i < 10; i++) {
      result[i] = function() {
        console.log(`outer3--${i}`);
      };
    }
    return result;
  };
  const data5 = outer();
  data5.map(item => item());

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
  };
  const data2 = outer2();
  data2.map(item => item());

  const data3 = {
    name: "object",
    getName: function() {
      // object
      console.log(`1--${this.name}`);
      return function() {
        // undefind
        // 因为里面的闭包函数是在window作用域下执行的，也就是说，this指向windows
        console.log(`2--${this.name}`);
      };
    }
  };
  // data3.getName()();

  // 实际上起作用的是闭包函数f，而不是外面的函数newFactorial
  const newFactorial = function f(num) {
    if (num < 1) {
      return 1;
    } else {
      return num * f(num - 1);
    }
  };
  const data4 = newFactorial(5);

  return <div>{data4}</div>;
};

export default TestClosure;
