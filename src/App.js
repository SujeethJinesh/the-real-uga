import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="diploma">
          <input type="text" className="enterName" placeholder="Insert Name Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
        </div>
        <div className="printButton">
          <Button variant="outline-dark" size="lg">
            Print your diploma
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
