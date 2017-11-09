import React, { PropTypes, Component } from 'react';

// Import Components
import CourseListItem from '../CourseListItem/CourseListItem';

// Import Style
import styles from './CourseList.css';

class CourseList extends Component {
  renderCategory(category) {
    return this.props.courses[category].map(course => (
      <CourseListItem
        course={course}
        key={course.cuid}
        onDelete={() => this.props.handleDeleteCourse(course.cuid)}
      />
    ));
  }

  render() {
    return (
      <div className="listView">
        <h2 className={styles['course-list-header']}>Available Courses</h2>
        {Object.keys(this.props.courses).map(category => (
          <div key={category}>
            <h3 className={styles['category-header']}>
              {category.toUpperCase()}
            </h3>
            <div>{this.renderCategory(category)}</div>
          </div>
        ))}
      </div>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.object.isRequired,
  handleDeleteCourse: PropTypes.func.isRequired
};

export default CourseList;
