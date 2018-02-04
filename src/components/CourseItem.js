import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Text
} from 'field-components'

class CourseItem extends PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            objectives: PropTypes.arrayOf(PropTypes.string)
        }).isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const { onClick, item: { name, objectives } } = this.props;
        return <Box px={4} py={3} bg="n0" w="100%" mx={1}>
            <Text large mb={3} fontWeight="600">{name}</Text>
            <Text small mb={3}>
                <ul>
                    {objectives.map( (objective, index) => <li key={index}>{objective}</li>)}
                </ul>
            </Text>
            <Button onClick={onClick} w="100%" children="See course" intent="success" />
        </Box>
    }
}

export default CourseItem;