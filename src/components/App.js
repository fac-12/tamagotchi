import React from "react";
import { Pokemon } from "./pokemon";
import { Hungry } from "./hungry";
import { Sad } from "./happiness";
import { Sleeping } from "./sleeping";
import { Photo } from "./img";
import egg from "../../Public/assets/little.png";
import growing from "../../Public/assets/growing.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size: egg };
  }

  render() {
    return (
      <div>
        <Pokemon />
        <div className="container">
          <Hungry sizeChange={size => this.setState({ size })} />
          <div className="img_container">
            <Photo size={this.state.size} />
            <Sleeping />
          </div>
          <Sad />
        </div>
      </div>
    );
  }
}
