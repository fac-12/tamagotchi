import React from "react";
const randomTimeout = Math.floor(Math.random() * (10000 - 7000 - 1) + 7000);
export class Sleeping extends React.Component {
  state = {
    awake: "",
    text: "I'm awake"
  };

  fallAsleep = () => {
    this.setState({ text: "Night, night zzzzz" });
  };

  setAsleep = randomTimeout => {
    console.log(randomTimeout);
    setTimeout(
      function() {
        this.setState({ text: "Night, night zzzz" });
      }.bind(this),
      randomTimeout
    );
  };

  componentDidMount() {
    this.setAsleep(randomTimeout);
  }

  wakeUp = () => {
    this.setState({ text: "I'm awake" });
  };

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.wakeUp}>Wake me </button>
      </div>
    );
  }
}
