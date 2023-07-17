import React, { useState } from "react";
const Calculator = () => {
  const [equation, setEquation] = useState("");

  return (
    <div id="Calculator">
      <div id="topspace">{equation}</div>
      <div id="btns">
        <div id="left-btns">
          <div className="columns">
            <button
              value="C"
              onClick={(event) => {
                setEquation(equation.slice(0, equation.length - 1));
              }}
            >
              CE
            </button>
            <button
              value="7"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              7
            </button>
            <button
              value="4"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              4
            </button>
            <button
              value="1"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              1
            </button>
            <button
              value="0"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              0
            </button>
          </div>
          <div className="columns">
            <button
              value="/"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              /
            </button>
            <button
              value="8"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              8
            </button>
            <button
              value="5"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              5
            </button>
            <button
              value="2"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              2
            </button>
            <button
              value="."
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              .
            </button>
          </div>
          <div className="columns">
            <button
              value="*"
              onClick={(event) => {
                // setEquation(equation + event.target.value);
                setEquation(equation + event.target.value);
              }}
            >
              *
            </button>
            <button
              value="9"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              9
            </button>
            <button
              value="6"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              6
            </button>
            <button
              value="3"
              onClick={(event) => {
                setEquation(equation + event.target.value);
              }}
            >
              3
            </button>
            <button
              value=""
              onClick={(event) => {
                setEquation("");
              }}
            >
              C
            </button>
          </div>
        </div>
        <div id="right-btns">
          <button
            value="-"
            onClick={(event) => {
              setEquation(equation + event.target.value);
            }}
          >
            -
          </button>
          {console.log(equation)}
          <button
            value="+"
            onClick={(event) => {
              setEquation(equation + event.target.value);
            }}
          >
            +
          </button>
          <button
            value="="
            onClick={() => {
              setEquation(eval(equation));
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
