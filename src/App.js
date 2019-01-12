// create your App component here
import React, { Component } from 'react'
const URL = 'http://api.open-notify.org/astros.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spaceNinjas: [],
    }
  }
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(astronauts => this.setState({ spaceNinjas: astronauts.people }))
  }
  render() {
    return (
      <div>
        {this.state.spaceNinjas.map(ninja => (
          <p>{ninja.name} is floating gently in space...</p>
        ))}
      </div>
    )
  }
}

export default App
