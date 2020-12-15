import './App.css'
import React from 'react'
import Scroll from "./Scoll"
import ScrollNotOpen from './ScrollNotOpen';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { scrollIsOpen: false}
  }



  render(){
    return this.state.scrollIsOpen? <Scroll setScrollFalse={this.setScrollFalse}/> : <ScrollNotOpen setScrollFalse={this.setScrollFalse} />
  }

  setScrollFalse = () => {
    this.setState({ scrollIsOpen: true})
  }
}

export default App;
