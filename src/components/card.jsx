import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';

class Card extends Component{
  state = {
    isFlipped: false
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped}))
  }

  render(){
    const {isFlipped} = this.state;
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
        <div style={{backgroundColor:'red', width:'150px', height:'150px'}} key='front' onClick={this.handleClick}></div>
        <div style={{backgroundColor:'blue', width:'150px', height:'150px'}} key='back' onClick={this.handleClick}></div>
      </ReactCardFlip>
    )
  }

}

export default Card;