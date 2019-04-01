import React, { Component } from 'react';
import '../App.css';
import ReactGA from 'react-ga';

class PrintPage extends Component {

  constructor(props) {
    super(props);

    ReactGA.initialize('UA-137378360-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    console.log("Very sly of you to see the console logs. You won't find anything of value here. As you might imagine, this site is built as an April Fools joke by a Georgia Tech student to poke fun at our 'rivalry' with UGA. No harm intended. For the original Diploma image, see the following link: https://cdn.shopify.com/s/files/1/0533/3437/products/Diploma_Frame_-_University_of_Georgia_-_Graduation_Gift_-_Mahogany_Bead_-_with_Medallion_-_Black_on_Red_mat_1800x1800.jpg?v=1406567030");
  }
  
  componentDidMount() {
    window.print();
  }

  render() {
    const { name } = this.props.match.params;

    return (
      <div className="App">
        <div className="diploma">
          <input id="nameInput" type="text" className="enterName" placeholder={name}/>
        </div>
      </div>
    );
  }
}

export default PrintPage;
