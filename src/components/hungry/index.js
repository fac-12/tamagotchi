import React from "react";
import "../happiness/style.scss";

export class Hungry extends React.Component {
  state = {
    needFood: "I am hungry. Feed me.",
    num: 0,
    progress: 0
  };

  incrementNum = () => {
    this.state.num === 0 ? this.setState({ needFood: "Thank you" }) : false;
    this.setState({
      num: this.state.num + 1,
      progress: this.state.progress + 10
    });
    this.state.num >= 10
      ? this.setState({
          num: 0,
          progress: 0,
          needFood: "I'm hungry again. Feed me again."
        })
      : false;
  };

  render() {
    const incrementHeight = {
      height: `${this.state.progress}%`
    };
    return (
      <div>
        <div className="food-bar">
          <div className="food-bar-progress" style={incrementHeight} />
        </div>
        <p>{this.state.needFood}</p>
        <p>{this.state.num}</p>
        <button onClick={this.incrementNum}>Food</button>
      </div>
    );
  }
}
