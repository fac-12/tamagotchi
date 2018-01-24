import React from "react";
import { Pokemon } from "./pokemon";
import { Hungry } from "./hungry";
import { Sad } from "./happiness";
import { Sleeping } from "./sleeping";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pokemon />
        <div className="container">
          <Hungry />
          <Sleeping />
          <Sad />
        </div>
      </div>
    );
  }
}
