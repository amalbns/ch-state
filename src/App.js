import React, { Component } from 'react'
import'./App.css'
import Personal from './Components/Personal'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:false} 
  }

  handleClick = () => this.setState({show: !this.state.show})
  render() {
    return (
      <div className='App'>
        <h1>Checkpoint React State :  Bio</h1>
        <button onClick={this.handleClick}>Show More</button>
        {this.state.show ? <Personal/> : null }
      
      
      </div>
    )
  }
}
