import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactGA from 'react-ga';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class LandingPage extends Component {

  constructor(props) {
    super(props);

    ReactGA.initialize('UA-137378360-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.onValueChange = this.onValueChange.bind(this);

    console.log("Very sly of you to see the console logs. You won't find anything of value here. As you might imagine, this site is built as an April Fools joke by a Georgia Tech student to poke fun at our 'rivalry' with UGA. No harm intended. For the original Diploma image, see the following link: https://cdn.shopify.com/s/files/1/0533/3437/products/Diploma_Frame_-_University_of_Georgia_-_Graduation_Gift_-_Mahogany_Bead_-_with_Medallion_-_Black_on_Red_mat_1800x1800.jpg?v=1406567030");

    this.state = {
        name: ''
    }
  }
  
  onValueChange(name) {
      this.setState({
          name: name.target.value
      })
  }

  render() {
    return (
      <div className="App">
        <div className="congratsText">
          Congratulations on existing! We have noticed your hard work and want to reward you with a degree from U(sic)GA. <p className="goDawgs">GO DAWGS</p> Just enter your name!
        </div>
        <div className="diploma">
          <input id="nameInput" type="text" className="enterName" value={this.state.name} onChange={(e) => {this.onValueChange(e)}} placeholder="Insert Name Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
        </div>
        <div className="printButton">
          <div className="outline-dark">
                <form action="">
                    <Link to={`/print/${this.state.name}`}>
                        <input type="button" className="outline-dark" value="Print your diploma"/>                            
                    </Link>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
