import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import CourseItem from '../components/CourseItem';
import { Flex } from 'field-components'

class CourseList extends PureComponent {
    static propTypes = {
        courses: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            objectives: PropTypes.array
        })).isRequired
    };

    render() {
        const { courses } = this.props;
        return <Flex justify="space-between" my={6} style={{display: 'flex', justifyContent: 'space-between', margin: '48px 0'}}>
            {courses.map( (item, index) => <CourseItem key={index} onClick={e=>e} item={item} />)}
        </Flex>
    }
}

export default CourseList;