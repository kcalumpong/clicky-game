import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import maps from "./map.json";
import Card from "./components/Card";
import "./App.css";
// import { restElement, newExpression } from "@babel/types";


class App extends Component {

  state = {
    maps,
    title: "Flag Memory Game",
    score: 0,
    topScore: 0,
    clicked: []
  }

  componentDidMount() {
    console.log(maps)
  }
  // login
  clickedCard = (id) => {
    console.log(id)
    console.log(this.state)
    if (this.state.clicked.indexOf(id) === -1){
      // increment the score
        // socre and topscore score is better than the top you update the top
        // shuffle
        // set the new state 
      let newClicked = this.state.clicked
      newClicked.push(id)
        let newscore = this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
        this.setState({
          score: this.state.score + 1,
          topScore: newscore,
          maps: this.shuffle(this.state.maps),
          clicked: newClicked
        })

    }
    else{
      console.log("repeated id")
     // this.restart()
     // clean the clicked and score = 0
    }
// array with the id clicked then you can use the indexof
  
    // now the logic
    // verify 
    // socre up or restart
    // shuffle
  }

  shuffle = maps => {
    // https://stackoverflow.com/a/43235780/10503606

    let newMaps = maps.sort(() => Math.random() - 0.5);
    return newMaps;
  }

  render() {
    return (
      <div>
        {/* <Navbar
          title={this.state.title} /> */}
        <Jumbotron />
        {this.state.maps.map(item => (
          <Card
            name={item.country}
            id={item.id}
            img={item.img}
            clickedCard={this.clickedCard}
            />
        ))}
      </div>
    )}
}


        export default App;
