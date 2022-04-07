
import React, { Component } from "react";
import GameBoard from "./components/GameBoard";
import NewGame from "./components/NewGame";
import PlayAgain from './components/PlayAgain';
const createId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
class App extends Component {
  static initState = () => {
    return {
      newGame: false,
      won: false,
      cards: [],
      clicks : 0
    };
  }

  state = App.initState();

  countClicks = () => {
    this.setState((prevState) => ({
        clicks : prevState.clicks + 1
    }));
  }

  generateDeck = () => {
    let amount = 4;
    let cards = [];
    for (let i = 1; i < amount + 1; i++) {
      let id = createId();
      let id2 = createId();
     
      let rand = Math.floor(Math.random() *120) + 1;
      
      const card1 = {
        id: id,
        matchesId: id2,
        url: `https://randomfox.ca/images/${rand}.jpg`,
                flipped: false,
        found: false,
      }
      console.log(Math.floor(Math.random() * 300) + 1);
      const card2 = {
        id: id2,
        matchesId: id,
        url: `https://randomfox.ca/images/${rand}.jpg`,
                flipped: false,
        found: false,
      }
      cards.push(card1);
      cards.push(card2);
    }
    this.shuffleCards(cards);

    this.setState({
      cards: cards
    });
  }


shuffleCards = (card) => {
  for (let i = card.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [card[i], card[j]] = [card[j], card[i]];
  }
  return card;
}
resetGame = () => {
  this.setState(App.initState(), () => {
    this.initGame()
  });
}

  hasWon = () => {
    this.setState({
      won: true
    });
  };

  initGame = () => {
    this.generateDeck();
    this.setState({
      newGame: true
    });
  };

  render() {
    const { cards, newGame, won, clicks } = this.state;
    return (
      <div>
        <div className="board-container">
          {newGame ?
            (<GameBoard cards={cards} won={this.hasWon} click={this.countClicks} />)
            : null}
            {newGame && (<p className="message center">Total flips: {clicks}</p>)}
        </div>

        <div className="menu">
        <div className="message">
        {won && (<h2>You win! With only {clicks} flips</h2>)}
          </div>
          <NewGame play={this.initGame} />
          {won && (<PlayAgain again={this.resetGame} />)}
        </div>
      </div>
    );
  }
}

export default App;

