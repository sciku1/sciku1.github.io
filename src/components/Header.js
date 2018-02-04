import React, { PureComponent } from 'react';
import {
    Button,
    Text,
    Image
} from 'field-components'
import Flex from './Flex'
import HeaderImage from '../img/dozer.jpeg'

class Header extends PureComponent {
    render () {
        return (
            <div
                my={6}
                bg="n900"
                className={this.props.className}
                style={{backgroundColor: 'black', borderRadius: '8px', margin: '48px 0'}}
            >
                <Flex align="center" className={this.props.className} style={{display: 'flex', alignItems: 'center'}}>
                    <div width="50%" mx={[3, 6]} style={{margin: '0 48px', width: '50%'}}>
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
                            rounded
                            large
                        />
                    </div>
                    <div
                        width="50%"
                        h="500px"
                        style={{backgroundImage: `url(${HeaderImage})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '4px', width: '50%', height: '500px'}}
                    />
                </Flex>
            </div>
        );
    }
}

export default Header