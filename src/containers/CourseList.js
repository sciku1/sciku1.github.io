import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import CourseItem from '../components/CourseItem';

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
        return <div className="course-list">
            {courses.map( (item, index) => <CourseItem key={index} onClick={e=>e} item={item} />)}
        </div>;
    }
}

export default CourseList;