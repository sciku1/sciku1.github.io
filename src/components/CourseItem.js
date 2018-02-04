import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Text,
    Image
} from 'field-components'
import Flex from './Flex'


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
        const { onClick, item: { name, objectives, image } } = this.props;
        return(
            <Flex px={4} py={3} bg="n0" w="100%" mx={1} direction="column"
                style={{display: 'flex', borderRadius: '4px', flexDirection: 'column', padding: '16px 24px', width: '100%', backgroundColor: 'white', margin: '0 8px'}}
            >
                <Text large mb={3} fontWeight="600">{name}</Text>
                <div className="course-image" style={{
                    backgroundImage: `url(${image})`,
                    borderRadius: '4px',
                    backgroundSize: 'cover',
                    height: 130,
                    marginBottom: 12,
                    backgroundPosition: 'center center',
                    width: '100%'
                }} />

                    {objectives.map( (objective, index) => <Text small mb={2} style={{ textAlign: "center" }} key={index}>{objective}</Text>)}
                <Button onClick={onClick} w="100%" children="See course" style={{marginTop: 'auto'}} intent="success" />
            </Flex>
        )
    }
}

export default CourseItem;