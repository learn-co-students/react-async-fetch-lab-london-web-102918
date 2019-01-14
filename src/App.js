import React, { Component } from 'react';
import { resolve } from 'url';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resolve => resolve.json())
        .then(data => {
            this.setState({
                people: data.people
            })
        })
    }


    render() {
        return (
            <ul>
                {this.state.people.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}

export default App;
