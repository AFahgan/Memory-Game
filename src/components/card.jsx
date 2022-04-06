import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

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
            height: "100px",
            marginLeft: "4px",
          }}
          key="front"
          onClick={this.handleClick}
        ></div>
        <div
          style={{
            backgroundImage:
              "url(https://pbs.twimg.com/profile_images/1348261726156939265/2Ahv0LjP_400x400.jpg)",
            backgroundSize: "100% 100%",
            width: "100px",
            height: "100px",
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
