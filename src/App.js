// create your App component here
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      astronautz: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(j => this.setState({astronautz: j.people}) )
  }

  render() {
    return (
      <div>
        {this.state.astronautz.map((a, id) => <p key={id}>{a.name} in     space!</p>)}
      </div>
    );
  }

}

export default App;
