import React from "react";
import "../happiness/style.scss";
import egg from "../../../Public/assets/little.png";
import growing from "../../../Public/assets/growing.png";

export class Hungry extends React.Component {
  state = {
    needFood: "I am hungry. Feed me.",
    num: 0,
    progress: 0,
    size: egg
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
          needFood: "I'm hungry again. Feed me again.",
          size: growing
        })
      : false;
  };

  render() {
    const incrementHeight = {
      height: `${this.state.progress}%`
    };
    return (
      <div className="food">
        <div>
          <div className="food-bar">
            <div className="food-bar-progress" style={incrementHeight} />
          </div>
          <p className="mood-text">{this.state.needFood}</p>
          <p className="mood-text">{this.state.num}</p>
          <button onClick={this.incrementNum} className="mood-text">
            Food
          </button>
        </div>
        <div>
          <img className="img" src={this.state.size} />
        </div>
      </div>
    );
  }
}
