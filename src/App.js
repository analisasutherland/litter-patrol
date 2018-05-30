import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  // when component starts up it sets the initial state of the bins by calling the getBinsState fxn and sets initial points to 0
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      // this checks if the trash is visible and where it shows up by calling getBinsState fxn
      points: 0
    };

    this.startGame();
    // the constructor also calls the fxn startGame, this will set the interval for when the bins move.
    console.log(this.state.bins);
  }

  // it does this by calling setState with will overwrite bins with a new call on getBinsState. This will then render the componenet again and get display a new randomized layout of the the trash bins w/without trash in them.
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

  // getBinsState gives us an array of bins
  // overall is checking if visible trash will be displayed in a given bin
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible:
        // is pushing the given bins where trash is into bins array
      (Math.round(Math.random()) ? true : false )});
      // so returning a random num between 0-1, rounding that num, and evaluating if it is truthy or falsey. 0 is fale in JS
      // Math.random() > 0.5
    }

    return bins;
  }

  // this will allow us to click on trash as it appears randomly in the defined bins. On click event for the trash a point will be given to the user
  onTrashClicked = () => {
    console.log(this);
    this.setState( {
      points: this.state.points + 1
    });
  }

  render() {
    // mapping over the bins array and displaying the visible trash
    const bins = this.state.bins.map((bin, index) => {
      return (
        // whatever index the trash was at is assigned as the unique trash key to identify them from each other
        <Trash key={`trash-${index}`}
        isTrashVisible={bin.isTrashVisible}
        trashCallback={this.onTrashClicked}
        />
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
