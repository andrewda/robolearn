import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Components
import CourseCreateWidget from '../../components/CourseCreateWidget/CourseCreateWidget';

// Import Style
import styles from '../../components/CourseListItem/CourseListItem.css';

// Import Actions
import {
  addCourseRequest
} from '../../CourseActions';

export class CourseNewPage extends Component {
  handleAddCourse = (name, title, content) => {
    this.props.dispatch(addCourseRequest({ name, title, content }));
  };
  
  render() {
    return (
      <div>
        <Helmet title="New Course" />
        <div className={`${styles['single-course']} ${styles['course-detail']}`}>
          <CourseCreateWidget
            addCourse={this.handleAddCourse}
          />
        </div>
      </div>
    );
  }
}

CourseNewPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};


export default CourseNewPage;
