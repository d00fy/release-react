import React from "react";
import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase";
import { firebaseConfig } from "./firebase-config";
firebase.initializeApp(firebaseConfig);
// var storage = firebase.storage();
// console.log(storage);
// var storageRef = storage.ref();

const storage = firebase.storage();
const storageRef = storage.ref();
const downRef = storageRef.child("images/03_Ghibli_2880x1800_7.jpg");
console.log(downRef);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
