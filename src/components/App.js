import React from "react";
import { Pokemon } from "./pokemon";
import { Hungry } from "./hungry";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pokemon />
        <Hungry />
      </div>
    );
  }
}
