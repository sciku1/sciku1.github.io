import React, { Component } from 'react';
import './App.css';
import CourseList from './containers/CourseList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CourseList courses={[]} />
      </div>
    );
  }
}

export default App;
