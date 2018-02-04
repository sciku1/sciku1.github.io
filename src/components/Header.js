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


class Header extends PureComponent {
    render () {
        return (
            <Flex
                align="center"
                my={9}
            >
                <Box width="50%" mr={[3, 6]}>
                    <Text
                        lineHeight="1.167"
                        fontSize="48px"
                        fontWeight="600"
                        mb={5}
                        color="n0"
                    >
                        Get cutting edge training at a fraction of the cost
                    </Text>
                    <Button
                        children="Try for Free Today"
                        intent="success"
                    />
                </Box>
                <Box>
                    <img src="" style={{width: '100%'}} />
                </Box>
            </Flex>
        );
    }
}

export default Header