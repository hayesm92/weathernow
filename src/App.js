import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      city: '',
      currentWeather: ''

    }
  }
componentDidMount(){
fetch('api.openweathermap.org/data/2.5/weather?q=pittsburgh&appid=4f6789638abb731b3d815008553b4efd')
.then(response => response.json())
.then(data => console.log(data))


}
  render(){
    return (
      <div>
        Hello
      </div>
    )
  }
  
}

export default App;
