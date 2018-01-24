import React from "react";
import { getPokemon } from "../../utils/data_helpers";

export class Pokemon extends React.Component {
  state = {
    data: {}
  };

  pokeApiCall = () => {
    const randomNum = Math.floor(Math.random() * 100);
    getPokemon(randomNum).then(data => this.setState({ data }));
  };

  componentDidMount() {
    this.pokeApiCall();
  }

  render() {
    if (!this.state.data) return <h3>Loading...</h3>;
    const { name } = this.state.data;

    return (
      <div className="pokemon">
        <h1 className="pokemon-name">Name: {name}</h1>
        <button className="name-button" onClick={this.pokeApiCall}>
          Change my name!
        </button>
      </div>
    );
  }
}
