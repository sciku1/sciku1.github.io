import React, { Component } from 'react';
import CourseList from './containers/CourseList';
import Header from './components/Header'
import Nav from './components/Nav'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './theme'
import {
    Box,
    Flex,
    Text,
    Icon
} from 'field-components'
import Dozer from './img/dozer.jpeg';
import Excavator from './img/excavator.jpeg';
import Grader from './img/grader.jpg';
import Loader from './img/loader.jpeg';

injectGlobal`
  * { box-sizing: border-box; }
  html {
    height: 100%;

    &:lang(ar, arc, dv, far, ha, he, khw, ks, ku, ps, ur, yi) { direction: rtl; }
  }
  body {
    height: 100%;
    margin: 0;
    background: #e6e8eb;

    > div { min-height: 100%; }
  }
`;

class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
            <Box className="App" bg="n800">
                <Nav />
                <Box p={4} mw="1080px" mx="auto">
                    <Header />
                    <Flex
                        p={[4, 6]}
                        bg="g400"
                        justify="space-between"
                        style={{borderRadius: '4px'}}
                    >
                        <Flex align="center">
                            <Icon type="Zap" color="white" />
                            <Text ml={2} large fontWeight="600">Equipment Simulators</Text>
                        </Flex>
                        <Flex align="center">
                            <Icon type="UserCheck" color="white" />
                            <Text ml={2} large fontWeight="600">Interactive Learning</Text>
                        </Flex>
                        <Flex align="center">
                            <Icon type="Cpu" color="white" />
                            <Text ml={2} large fontWeight="600">Emerging Technology</Text>
                        </Flex>
                    </Flex>
                    <CourseList courses={courses} />
                </Box>
            </Box>
        </ThemeProvider>

    );
  }
}


const courses = [
    {
        name: "Working with an Excavator",
        image: Excavator,
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
        image: Loader,
        objectives: [
            "Backfilling and Leveling with a Loader",
            "Loading Trucks",
            "Loading Ramps"
        ]
    },
    {
        name: "Working with a Bulldozer",
        image: Dozer,
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
        image: Grader,
        objectives: [
            "Performing Figure 8 with tire",
            "Windrowing dirt",
            "Building a V Ditch",
            "Performing a Shoulder Pull",
            "Road Build With Curve"
        ]
    }
];
export default App;
