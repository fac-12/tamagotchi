import React from "react";
import { getPokemon } from "../../utils/data_helpers";

const randomNum = Math.floor(Math.random() * 100);

export class Pokemon extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    getPokemon(randomNum).then(data => this.setState({ data }));
  }
  render() {
    if (!this.state.data) return <h3>Loading...</h3>;
    const { name } = this.state.data;

    return (
      <div>
        <h1 className="pokemon-name">{name}</h1>
      </div>
    );
  }
}
