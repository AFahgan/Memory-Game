import React from 'react'

 class StartGame extends React.Component {
    state = {
        visible: true,
      }
    
      handleClick = e => {
        this.setState({ visible: !this.state.visible }, () => {
          this.props.play()
        });
      };

    render(){
        const { visible } = this.state;
        return(
            <div className="menu-item">
            <button className="btn btn-play"
              onClick={this.handleClick}
              style={{ visibility: visible ? "visible" : "hidden" }}>
              Play
            </button>
          </div >
        )
    }
}

export default StartGame