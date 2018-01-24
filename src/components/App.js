import React from "react";
import { Pokemon } from "./pokemon";
import { Hungry } from "./hungry";
import { Sad } from "./happiness";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pokemon />
        <Hungry />
        <Sad />
      </div>
    );
  }
}
