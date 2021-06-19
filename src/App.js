import React, { Component } from "react";

export class App extends Component {
  render() {
    return <div></div>;
  }
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }
}

export default App;
