import React, { PureComponent } from 'react';
import styled from 'styled-components'
import {
    Box,
    Flex,
    Button,
    Text,
    Heading,
    Icon
} from 'field-components'


class Nav extends PureComponent {
    render () {
        return (
          <Box
            bg="n20"
          >
            <Flex
                align="center"
                justify="space-between"
                mw="1080px"
                mx="auto"
                py={3}
                px={4}
            >
              <Text fontWeight="600" fontSize="20px" lineHeight="24px">VRify</Text>
              <Button
                rounded
                small
                children="Get Started"
                intent="success"
              />
            </Flex>
          </Box>
        );
    }
}

export default Nav