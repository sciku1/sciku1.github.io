import React, { PureComponent } from 'react'
import CourseItem from '../components/CourseItem';

class CourseList extends PureComponent {
    render() {
        const { data } = this.props;
        return <div>
            {data.map( item => <CourseItem data={item} />)}
        </div>;
    }
}

export default CourseList;