import React, { Component } from 'react';
import ButtonBar from './ButtonBar';
import ButtonContext from './ButtonContext';

class App extends Component {
  state = {
    current: -1
  }


  changeState(e) {
    this.setState({current: e.target.value});
  }

  render() {
    return (
      <div style={styles.container}>
        <ButtonContext.Provider value={{style: styles.buttonTheme, handler: this.changeState.bind(this)}}>
          <ButtonBar />
        </ButtonContext.Provider>
      </div>
    );
  }
}

export default App;

const styles = {
  buttonTheme: {
    backgroundColor: "lightgrey",
    color: "white",
    border: "1px solid white",
    borderRadius: 15,
    margin: "5px 15px",
    padding: "20px 50px",
    fontSize: 25
  },
  container: {
    display: "flex",
    justifyContent: "center"
  }
}
