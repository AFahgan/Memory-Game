import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
const backgroundImage = "https://cs.csub.edu/~arodriguez/cs2680/FinalProject/images/pair6.jpg";
class Card extends Component {
  state = {
    isFlipped: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    const { isFlipped } = this.state;
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="memoryCard front"
          style={{
            backgroundImage: `url(https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/8007b.jpg)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",

            width: "100px",
            height: "140px",
            marginLeft: "4px",
          }}
          key="front"
          onClick={this.handleClick}
        ></div>
        <div
          style={{
            backgroundImage:
           `Url(${backgroundImage})`,
            backgroundSize: "100% 100%",
            width: "100px",
            height: "140px",
            borderRadius:'10px',
            marginLeft: "8px",
         

          }}
          key="back"
          onClick={this.handleClick}
        ></div>
      </ReactCardFlip>
    );
  }
}

export default Card;
