import React, { Component } from "react";
import "./App.css";
import Navbar from "../Components/atom/Navbar";

export class App extends Component {
  // ini untuk membuat state
  constructor() {
    super();
    this.state = {
      name: "Bagas",
      age: 20,
      count: 0,
    };
  }

  // ini untuk mengupdate data count dari 0 dengan cara menambahkan + 1
  addAngka = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // dirender ini bertugas untuk membaca state
  render() {
    return (
      <div className="App">
        <Navbar name={this.state.name} age={this.state.age} />
        <span className="text-black font-bold">{this.state.count}</span>
        <button
          className="bg-red-500	 text-white font-bold py-2 px-4 rounded-sm"
          onClick={this.addAngka}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
