import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';

console.log(browserHistory);

// Import Components
import CourseCreateWidget from '../../components/CourseCreateWidget/CourseCreateWidget';

// Import Style
import styles from '../../components/CourseListItem/CourseListItem.css';

// Import Actions
import { addCourseRequest } from '../../CourseActions';

export class CourseNewPage extends Component {
  handleAddCourse = (name, title, content, category) => {
    this.props.dispatch(addCourseRequest({ name, title, content, category }));
    browserHistory.push('/');
  };

  render() {
    return (
      <div>
        <Helmet title="New Course" />
        <div
          className={`${styles['single-course']} ${styles['course-detail']}`}
        >
          <CourseCreateWidget addCourse={this.handleAddCourse} />
        </div>
      </div>
    );
  }
}

CourseNewPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(CourseNewPage);
