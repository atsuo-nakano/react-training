import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component{
  state = {
    persons: [
      { name: 'Takashi', age: 23 },
      { name: 'Oki', age: 18 },
      { name: 'Andrew', age: 89 },
      
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({persons: [
      { name: newName, age: 23 },
      { name: 'Oki', age: 18 },
      { name: 'Andrew', age: 23 }     
    ]    
  } )
    
}

nameChangeHandler = (event) => {
  this.setState({
    persons: [
    { name: 'Takeda', age: 23 },
    { name: event.target.value, age: 18 },
    { name: 'Andrew', age: 23 }     
  ]    
} ) 
}
  togglePersonHandler= () => {
    const doesShow= this.state.shoePersons;
    this.setState({showPersons: !doesShow})

  }

  render(){
    const style = {
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

  return (
    <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working</p>
      <button 
          style={style}
        onClick={this.togglePersonHandler}>Switch Name</button>
     { 
      this.state.showPersons === true ? 
        <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Takahashi!')} 
          changed={this.nameChangeHandler}>My hobby is racing</Person>
        <Person 
          name ={this.state.persons[2].name} 
         age={this.state.persons[2].age} />
      </div> : null
      }
    </div>
        
  );
  
  }
}
export default App;
