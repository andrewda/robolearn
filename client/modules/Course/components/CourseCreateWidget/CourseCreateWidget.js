import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './CourseCreateWidget.css';

export class CourseCreateWidget extends Component {
  addCourse = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addCourse(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${styles.appear}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>
            <FormattedMessage id="createNewCourse" />
          </h2>
          <input
            placeholder={this.props.intl.messages.authorName}
            className={styles['form-field']}
            ref="name"
          />
          <input
            placeholder={this.props.intl.messages.courseTitle}
            className={styles['form-field']}
            ref="title"
          />
          <textarea
            placeholder={this.props.intl.messages.courseDescription}
            className={styles['form-field']}
            ref="content"
          />
          <a
            className={styles['course-submit-button']}
            href="#"
            onClick={this.addCourse}
          >
            <FormattedMessage id="submit" />
          </a>
        </div>
      </div>
    );
  }
}

CourseCreateWidget.propTypes = {
  addCourse: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(CourseCreateWidget);
