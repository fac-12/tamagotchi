import React from "react";
import egg from "../../../Public/assets/little.png";
import growing from "../../../Public/assets/growing.png";

export class Photo extends React.Component {
  render() {
    return (
      <div>
        <img className="img" src={this.props.size} />
      </div>
    );
  }
}
