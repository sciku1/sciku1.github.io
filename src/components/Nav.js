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
            <Flex
                align="center"
                justify="space-between"
                py={3}
                px={4}
                bg="n20"
            >
              <Text fontWeight="600" fontSize="20px" lineHeight="24px">VRify</Text>
              <Button small children="Get Started" intent="success" />
            </Flex>
        );
    }
}

export default Nav