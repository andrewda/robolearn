import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import CourseList from '../../components/CourseList';
import CourseCreateWidget from '../../components/CourseCreateWidget/CourseCreateWidget';

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

  render() {
    return (
      <div>
        <CourseCreateWidget
          addCourse={this.handleAddCourse}
          showAddCourse={this.props.showAddCourse}
        />
        <CourseList
          handleDeleteCourse={this.handleDeleteCourse}
          courses={this.props.courses}
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
