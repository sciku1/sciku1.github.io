import React, { Component } from 'react';
import './App.css';
import CourseList from './containers/CourseList';
const courses = [
    {
      name: "Working with an Excavator",
      objectives: [
          "Straight Trench / Backfill",
          "Site Levels",
          "1:1 Slope Trenches",
          "Flat Road Builds",
          "Load Trucks",
          "Loading Ramps"
      ]
    },
    {
        name: "Working with a Loader",
        objectives: [
            "Backfilling and Leveling with a Loader",
            "Loading Trucks",
            "Loading Ramps"
        ]
    },
    {
      name: "Working with a Bulldozer",
        objectives: [
            "Perform a 30m push to build access ramp",
            "Able to build a sump",
            "Able to build a swale",
            "Road Build",
            "Side-Road Build"
        ]
    },
    {
        name: "Working with a Grader",
        objectives: [
            "Performing Figure 8 with tire",
            "Windrowing dirt",
            "Building a V Ditch",
            "Performing a Shoulder Pull",
            "Road Build With Curve"
        ]
    }
];
class App extends Component {
  render() {
    return (
      <div className="App">
          <CourseList courses={courses} />
      </div>
    );
  }
}

export default App;
