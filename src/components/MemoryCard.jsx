import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

class MemoryCard extends Component {
  flipCardHandler = (ele) => {
    if (this.props.found || this.props.flipped) return;
    this.props.flip(ele.target.id);
  };

  render() {
    const { id, imgUrl, flipped, found } = this.props;
    return (
      <div className="card">
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <div
            id={id}
            className="memoryCard front"
            onClick={this.flipCardHandler}
            style={{
              backgroundImage: `url(https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/8007b.jpg)`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
            key="front"
          />
          <div
            className="memoryCard back"
            onClick={this.flipCardHandler}
            key="back"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              border: found ? '0.5px solid green' : "none",
              
            }}
          ></div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default MemoryCard;
