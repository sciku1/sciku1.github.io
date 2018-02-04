import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import CourseItem from '../components/CourseItem';

class CourseList extends PureComponent {
    static propTypes = {
        courses: PropTypes.array.isRequired
    };

    render() {
        const { courses } = this.props;
        return <div>
            {courses.map( item => <CourseItem data={item} />)}
        </div>;
    }
}

export default CourseList;