import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
class MemoryCard extends Component {

  flipCardHandler = (element) => {
    if (this.state.found || this.state.flipped) return;
    this.state.flip(element.target.id);
  };

  render() {
    const { id, imgLink, flipped } = this.state;
    return (
      <div className="card">
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <div
            id={id}
            className="memoryCard front"
            onClick={this.flipCardHandler}
            style={{ background: "#35BFFE" }}
            key="front"
          />
          <div
            className="memoryCard"
            onClick={this.flipCardHandler}
            key="back"
            style={{
              backgroundImage: `url(${imgLink})`,
              backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                
            }}
          ></div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default MemoryCard;
