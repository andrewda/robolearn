import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/CourseListItem/CourseListItem.css';

// Import Actions
import { fetchCourse } from '../../CourseActions';

// Import Selectors
import { getCourse } from '../../CourseReducer';

export function CourseDetailPage(props) {
  return (
    <div>
      <Helmet title={props.course.title} />
      <div className={`${styles['single-course']} ${styles['course-detail']}`}>
        <h3 className={styles['course-title']}>{props.course.title}</h3>
        <p className={styles['author-name']}>
          <FormattedMessage id="by" /> {props.course.name}
        </p>
        <div className={styles['course-desc']} dangerouslySetInnerHTML={{ __html: props.course.content }}></div>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
CourseDetailPage.need = [
  params => {
    return fetchCourse(params.cuid);
  }
];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    course: getCourse(state, props.params.cuid)
  };
}

CourseDetailPage.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired
  }).isRequired
};

export default connect(mapStateToProps)(CourseDetailPage);
