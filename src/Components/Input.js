import React, { useState } from "react";
import { Display1, Display2, Display3, Display4, Display5, Display6 } from "./index";
import "./index.css";

export default function Input() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [value, setValue] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function refreshPage() {
    window.location.reload(false);
  }

  function handleChange(e) {
    setValue(e.target.value);
    setIsAvailable(true);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>Enter Query:</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            id="query"
            name="query"
            onChange={handleChange}
            required
          />
          <button disabled={!isAvailable} onClick={() => setShow5(true)}>
            Run
          </button>
          <button disabled={!isAvailable} onClick={() => setShow5(false)}>
            Hide
          </button>
          <button disabled={!isAvailable} onClick={refreshPage}>
            Clear
          </button>

          <br />
        </form>
      </div>
      <h2>Predefined Set of Queries:</h2>
      <div>
        <input id="query" type="text" readOnly={true} value="Select * from todos;" />
        <button onClick={() => setShow(true)}>Run</button>
        <button onClick={() => setShow(false)}>Hide</button>
      </div>
      <div>
        <input id="query" type="text" readOnly={true} value="Select * from users" />
        <button onClick={() => setShow1(true)}>Run</button>
        <button onClick={() => setShow1(false)}>Hide</button>
      </div>
      <div>
        <input id="query" type="text" readOnly={true} value="Select * from quotes;" />
        <button onClick={() => setShow2(true)}>Run</button>
        <button onClick={() => setShow2(false)}>Hide</button>
      </div>
      <div>
        <input id="query" type="text" readOnly={true} value="Select * from comments;" />
        <button onClick={() => setShow3(true)}>Run</button>
        <button onClick={() => setShow3(false)}>Hide</button>
      </div>
      <div>
        <input id="query" type="text" readOnly={true} value="Select * from posts;" />
        <button onClick={() => setShow4(true)}>Run</button>
        <button onClick={() => setShow4(false)}>Hide</button>
      </div>
      {show ? (
        <div>
          <h3>Results for  "Select * from todos;" :</h3>{" "}
          <div className="query">
            <Display1 />
          </div>
        </div>
      ) : null}
      {show1 ? (
        <div>
          <h3>Results for  "Select * from users;" :</h3>{" "}
          <div className="query">
            <Display2 />
          </div>
        </div>
      ) : null}
      {show2 ? (
        <div>
          <h3>Results for  "Select * from quotes;" : </h3>
          <div className="query">
            <Display3 />
          </div>
        </div>
      ) : null}
      {show3 ? (
        <div>
          <h3>Results for  "Select * from comments;" : </h3>
          <div className="query">
            <Display4 />
          </div>
        </div>
      ) : null}
      {show4 ? (
        <div>
          <h3>Results for  "Select * from posts;" :</h3>{" "}
          <div className="query">
            <Display5 />
          </div>
        </div>
      ) : null}
      {show5 ? (
        <div>
          <h3>Results for your Query :</h3>{" "}
          <div className="query">
            <Display6 />
          </div>
        </div>
      ) : null}
    </div>
  );
}
