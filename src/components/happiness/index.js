import React from "react";
import "./style.scss";

export class Sad extends React.Component {
  state = {
    feelSad: "I feel sad. Please love me.",
    num: 0
  };

  incrementNum = () => {
    this.state.num === 0 ? this.setState({ feelSad: "Thank you" }) : false;
    this.setState({ num: this.state.num + 1 });
  };

  render() {
    return (
      <div>
        <div className="sad-bar">
          <div className="sad-bar-progress" />
        </div>
        <p>{this.state.feelSad}</p>
        <p>{this.state.num}</p>
        <button onClick={this.incrementNum}>Love</button>
      </div>
    );
  }
}
