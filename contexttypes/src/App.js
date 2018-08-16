import React, { Component } from 'react';

const TestContext = React.createContext('test');

class App extends React.Component {
  render() {
    return (
      <TestContext.Provider value="testValue">
        <TestChild />
      </TestContext.Provider>
    );
  }
}

function TestChild(props) {
  return (
    <div>
      <TestButton />
    </div>
  );
}

function TestButton(props) {
  return (
    <TestContext.Consumer>
      {testValue => <Button {...props} testProp={testValue} />}
    </TestContext.Consumer>
  );
}

function Button(props) {
  return (
    <button type="button">
      {props.testProp}
    </button>
  );
}

export default App;
