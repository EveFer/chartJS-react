import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import RunnerCard from './components/RunnerCard'
import ChartCard from './components/ChartCard'

export default class App extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      runnerData: {},
      runnerKey: ''
    }

    this.handlerRunnerClick = this.handlerRunnerClick.bind(this)
  }

  componentDidMount() {
    fetch('https://runtracks-a4c10.firebaseio.com/.json')
    .then(response => response.json())
    .then(data => {
      this.setState({runnerData: data})
    })
  }
  
  handlerRunnerClick(event) {
    let runnerKey = event.target.dataset.runnerKey
    this.setState({runnerKey})
    this.setState({selectedRunner: this.state.runnerData[runnerKey]})
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          {
            Object.keys(this.state.runnerData).map((runner) => (
                <RunnerCard 
                  runnerName={this.state.runnerData[runner].name} 
                  key={runner} 
                  runnerKey={runner} 
                  handlerButtonClick={this.handlerRunnerClick} 
                  />
            ))     // obtiene un rray de las llavas de un objeto
          }
         
        </div>
  
        <div className="row">
          <div className="col-12 col-md-6">
            {
              this.state.selectedRunner ? ( <ChartCard chartData={this.state.selectedRunner} />) : null
            }
           
          </div>
        </div>
      </div>
    );
  }

}
