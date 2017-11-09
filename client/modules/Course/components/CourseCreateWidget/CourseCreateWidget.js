import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './CourseCreateWidget.css';

export class CourseCreateWidget extends Component {
  addCourse = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    const categoryRef = this.refs.category;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addCourse(
        nameRef.value,
        titleRef.value,
        contentRef.value,
        categoryRef.value
      );
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
            placeholder={this.props.intl.messages.courseTitle}
            className={styles['form-field']}
            ref="title"
          />
          <select
            className={styles['form-field']}
            ref="category"
            selected="select"
          >
            <option value="select" disabled>
              Select Category
            </option>
            <option value="software">Software</option>
            <option value="mechanical">Mechanical</option>
            <option value="cad">CAD</option>
            <option value="electrical">Electrical</option>
            <option value="business">Business</option>
          </select>
          <input
            placeholder={this.props.intl.messages.authorName}
            className={styles['form-field']}
            ref="name"
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
