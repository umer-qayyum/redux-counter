import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/Index";
function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a
              style={{ cursor: "pointer" }}
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNum(1))}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={myState}
            />
            <a
              style={{ cursor: "pointer" }}
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNum(1))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
