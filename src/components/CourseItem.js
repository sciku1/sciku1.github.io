import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
        return <div className="course-item" onClick={onClick}>
            <h2>{name}</h2>
            <div className="image"><img src="" alt=""/></div>
            <div className="course-content">
                <ul>
                    {objectives.map( (objective, index) => <li key={index}>{objective}</li>)}
                </ul>
            </div>
        </div>;
    }
}

export default CourseItem;