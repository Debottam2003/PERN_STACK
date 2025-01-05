import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Selector from "./Selector";
import "./App.css";

function App() {
  return (
    <>
        <h2 draggable className="deb text-6xl">
          DEBOTTAM + React
        </h2>
        <h2 className="js border-b-2 p-8 text-4xl">Javascript</h2>
        <div className="spin mt-16">
          <div className="circle"></div>
        </div>
        <Selector age = {22}></Selector>
    </>
  );
}

export default App;
