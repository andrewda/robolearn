import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import CourseList from '../../components/CourseList/CourseList';

// Import Actions
import {
  addCourseRequest,
  fetchCourses,
  deleteCourseRequest
} from '../../CourseActions';
import { toggleAddCourse } from '../../../App/AppActions';

// Import Selectors
import { getShowAddCourse } from '../../../App/AppReducer';
import { getCourses } from '../../CourseReducer';

class CourseListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }

  handleDeleteCourse = course => {
    if (confirm('Do you want to delete this course')) {
      // eslint-disable-line
      this.props.dispatch(deleteCourseRequest(course));
    }
  };

  handleAddCourse = (name, title, content) => {
    this.props.dispatch(toggleAddCourse());
    this.props.dispatch(addCourseRequest({ name, title, content }));
  };

  hashByCategory = courses => {
    const hash = {};
    courses.forEach(course => {
      const key = course.category ? course.category : 'uncategorized';
      if (hash[key]) {
        hash[key].push(course);
      } else {
        hash[key] = [course];
      }
    });
    return hash;
  };

  render() {
    return (
      <div>
        <CourseList
          handleDeleteCourse={this.handleDeleteCourse}
          courses={this.hashByCategory(this.props.courses)}
        />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CourseListPage.need = [
  () => {
    return fetchCourses();
  }
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddCourse: getShowAddCourse(state),
    courses: getCourses(state)
  };
}

CourseListPage.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired,
  showAddCourse: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

CourseListPage.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps)(CourseListPage);
