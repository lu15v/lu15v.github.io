import React, { Component } from 'react'
import { get } from 'https';
const API = 'https://restcountries.eu/rest/v2/all';
export default class Main extends Component {
  constructor(props){
      super(props);
  }

  componentDidMount(){
      fetch(API)
      .then(res => res.json())
      .then(r => console.log(r));
  }

  render() {
    return (
      <div>
        <h3>Work until you no longer have to introduce yourself</h3>
      </div>
    )
  }
}
