import React, { PureComponent } from 'react';
import {
    Box,
    Flex,
    Button,
    Text,
    Image
} from 'field-components'
import HeaderImage from '../img/dozer.jpeg'

class Header extends PureComponent {
    render () {
        return (
            <Box
                my={6}
                bg="n900"
                style={{borderRadius: '4px'}}
            >
                <Flex
                    align="center"
                >
                    <Box width="50%" mx={[3, 6]}>
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
                    <Box
                        width="50%"
                        h="500px"
                        style={{backgroundImage: `url(${HeaderImage})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '4px'}}
                    />
                </Flex>
            </Box>
        );
    }
}

export default Header