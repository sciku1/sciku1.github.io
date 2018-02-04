import React, { PureComponent } from 'react';
import styled from 'styled-components'
import {
    Button,
    Text,
    Heading,
    Icon
} from 'field-components'
import Flex from './Flex'

class Nav extends PureComponent {
    render () {
        return (
          <div
            bg="n20"
            style={{backgroundColor: '#f3f3f3'}}
          >
            <Flex
                align="center"
                justify="space-between"
                mw="1080px"
                mx="auto"
                py={3}
                px={4}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1080px', margin: '0 auto', padding: '16px 24px'}}
            >
              <Text fontWeight="600" fontSize="20px" lineHeight="24px">VRify</Text>
              <Button
                rounded
                small
                children="Get Started"
                intent="success"
              />
            </Flex>
          </div>
        );
    }
}

export default Nav