import React from "react";
import "../happiness/style.scss";

export class Hungry extends React.Component {
  state = {
    needFood: "I am hungry. Feed me.",
    num: 0,
    progress: 0,
    size: "https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=146912290"
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
          size:
            "https://vignette.wikia.nocookie.net/pokemon/images/e/ef/025Pikachu_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png/revision/latest?cb=20150105233050"
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
          <img src={this.state.size} />
        </div>
      </div>
    );
  }
}
