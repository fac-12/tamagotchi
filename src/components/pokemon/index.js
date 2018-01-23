import React from "react";
import { getPokemon } from "../../utils/data_helpers";

export class Pokemon extends React.Component {
  componentDidMount() {
    getPokemon().then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <h1> Hello world! </h1>
      </div>
    );
  }
}
