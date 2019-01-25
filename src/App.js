import React, { Component } from "react";
import { Button } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleClick}
          >
            Click me
          </Button>
          {this.state.clicked && `You clicked it!`}
        </header>
      </div>
    );
  }
}

export default App;
