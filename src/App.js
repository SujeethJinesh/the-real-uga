import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactGA from 'react-ga';

import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor(props) {
    super(props);

    ReactGA.initialize('UA-137378360-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    console.log("Very sly of you to see the console logs. You won't find anything of value here. As you might imagine, this site is built as an April Fools joke by a Georgia Tech student to poke fun at our 'rivalry' with UGA. No harm intended. For the original Diploma image, see the following link: https://cdn.shopify.com/s/files/1/0533/3437/products/Diploma_Frame_-_University_of_Georgia_-_Graduation_Gift_-_Mahogany_Bead_-_with_Medallion_-_Black_on_Red_mat_1800x1800.jpg?v=1406567030")

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.print();
  }
  
  render() {
    return (
      <div className="App">
        <div className="congratsText">
          Congratulations on being a Tech Student! We have noticed your hard work and want to reward you with a degree.
        </div>
        <div className="diploma">
          <input id="nameInput" type="text" className="enterName" placeholder="Insert Name Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
        </div>
        <div className="printButton">
          <Button variant="outline-dark" size="lg" onClick={this.handleClick}>
            Print your diploma
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
