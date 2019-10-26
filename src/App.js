import React, { Component } from "react";
import Nav from "./components/Nav";
import maps from "./map.json";
import Card from "./components/Card";
import "./App.css";

class App extends Component {

  state = {
    maps,
    title: "Flag Memory Game",
    score: 0,
    topScore: 0,
    message: "Click an any flag to start but don't click on it any more than once!",
    clicked: []
  }

  componentDidMount() {
    this.setState({ maps: this.shuffle(this.state.maps) })
  }

  clickedCard = (id) => {
    console.log(this.state)
    if (this.state.clicked.indexOf(id) === -1) {
      let newClicked = this.state.clicked
      newClicked.push(id)
      let newscore = this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
      this.setState({
        maps: this.shuffle(this.state.maps),
        score: this.state.score + 1,
        topScore: newscore,
        message: "Keep going! You're on your way to a new top score!",
        clicked: newClicked
      })

    }
    else {
      this.setState({
        maps: this.shuffle(this.state.maps),
        score: 0,
        message: "Oh no! You clicked a flag more than once!",
        clicked: [],
      });
    }
  }

  shuffle = maps => {
    // https://stackoverflow.com/a/43235780/10503606

    let newMaps = maps.sort(() =>
      Math.random() - 0.5);
    return newMaps;
  }

  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="flags-container">
          {this.state.maps.map(item => (
            <Card
              country={item.country}
              id={item.id}
              img={item.img}
              clickedCard={this.clickedCard}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;
