import React from "react";

export class Hungry extends React.Component {
  state = {
    needFood: "I am hungry. Feed me.",
    num: 0
  };

  incrementNum = () => {
    console.log("heyy");
    this.state.num === 0 ? this.setState({ needFood: "Thank you" }) : false;
    this.setState({ num: this.state.num + 1 });
  };

  amIHungry = () => {
    this.state.num === 0 ? "I am hungry. Feed me!" : true;
  };

  render() {
    return (
      <div>
        <p>{this.state.needFood}</p>
        <p>{this.state.num}</p>
        <button onClick={this.incrementNum}>Food</button>
      </div>
    );
  }
}
