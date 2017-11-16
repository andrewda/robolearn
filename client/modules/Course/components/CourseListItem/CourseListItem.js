import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import sanitizeHtml from 'sanitize-html';

// Import Style
import styles from './CourseListItem.css';

function CourseListItem(props) {
  let originalContent = props.course.content.replace(/<br \/>/g, ' ');
  let cutContent = originalContent.substr(0, 400);

  if (cutContent !== originalContent) {
    cutContent = cutContent.trim() + '...';
  }

  return (
    <div className={styles['single-course']}>
      <h3 className={styles['course-title']}>
        <Link to={`/course/${props.course.slug}-${props.course.cuid}`}>
          {props.course.title}
        </Link>
      </h3>
      <p className={styles['author-name']}>
        <FormattedMessage id="by" /> {props.course.name}
      </p>
      <div
        className={styles['course-desc']}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(cutContent) }}
      />
      <hr className={styles.divider} />
    </div>
  );
}

CourseListItem.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListItem;
