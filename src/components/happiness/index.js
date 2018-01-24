import React from "react";
import "./style.scss";

export class Sad extends React.Component {
  state = {
    feelSad: "I feel sad. Please love me.",
    num: 0,
    progress: 0
  };

  incrementNum = () => {
    this.state.num === 0 ? this.setState({ feelSad: "Thank you" }) : false;
    this.setState({
      num: this.state.num + 1,
      progress: this.state.progress + 10
    });
    this.state.num >= 10
      ? this.setState({
          num: 0,
          progress: 0,
          feelSad: "I'm sad again. Love me again."
        })
      : false;
  };

  render() {
    const incrementHeight = {
      height: `${this.state.progress}%`
    };
    return (
      <div>
        <div className="sad-bar">
          <div className="sad-bar-progress" style={incrementHeight} />
        </div>
        <p>{this.state.feelSad}</p>
        <p>{this.state.num}</p>
        <button onClick={this.incrementNum}>Love</button>
      </div>
    );
  }
}
