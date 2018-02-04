import React, { Component } from 'react';
import './App.css';
import CourseList from './containers/CourseList';
import { injectGlobal, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'
import theme from './theme'
import {
    Box,
    Flex,
    Button,
    Text,
    Heading,
    Icon
} from 'field-components'

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
        <ThemeProvider theme={theme}>
            <div className="App">
                <CourseList courses={[]} />
                <Box p={4} mw="960px" mx="auto" bg="n100">
                    <Box mw="960px" mx="auto">
                        <Text>Test</Text>
                    </Box>
                    <Flex p={[4, 6]} bg="g300" justify="space-between">
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
                    <Flex justify="space-between" my={6}>
                        <Box px={4} py={3} bg="n0" w="100%" mx={1}>
                            <Text large mb={3} fontWeight="600">Course name</Text>
                            <Text small mb={3}>Course description</Text>
                            <Button w="100%" children="See course" intent="success" />
                        </Box>
                        <Box px={4} py={3} bg="n0" w="100%" mx={1}>
                            <Text large mb={3} fontWeight="600">Course name</Text>
                            <Text small mb={3}>Course description</Text>
                            <Button w="100%" children="See course" intent="success" />
                        </Box>
                        <Box px={4} py={3} bg="n0" w="100%" mx={1}>
                            <Text large mb={3} fontWeight="600">Course name</Text>
                            <Text small mb={3}>Course description</Text>
                            <Button w="100%" children="See course" intent="success" />
                        </Box>
                    </Flex>
                </Box>
            </div>
        </ThemeProvider>
    );
  }
}

export default App;
