import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import './App.css'
import Card from "./Components/Card";

export default function App() {
  return (
    <div className="continer">
      {/* <Navbar /> */}
      {/* <Main/> */}
      {/* <h1 className="text-3xl font-bold underline bg-blue-600 text-center">Hello world!</h1> */}
      <h1 className="text-center text-green-400 font-bold from-stone-800 font-mono text-6xl " >Reader's Evening</h1>
      <Card/>

    </div>
  );
}
