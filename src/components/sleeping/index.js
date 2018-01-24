const randomTimeout = Math.floor(Math.random() * 250);

export class Sleeping extends React.Component {
  state = {
    awake: "",
    text: ""
  };

  setAsleep = randomTimeout => {
    setTimeout(this.setState({ text: "Night, night zzzzz" }, randomTimeout));
  };

  // componentDidMount() {
  //   getPokemon(randomNum).then(data => this.setState({ data }));
  // }

  render() {
    console.log(randomTimeout);
    return (
      <div>
        <p>{this.state.text}</p>
        <button />
      </div>
    );
  }
}
