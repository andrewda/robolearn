import Course from '../models/course';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all courses
 * @param req
 * @param res
 * @returns void
 */
export function getCourses(req, res) {
  Course.find()
    .sort('-dateAdded')
    .exec((err, courses) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ courses });
    });
}

/**
 * Save a course
 * @param req
 * @param res
 * @returns void
 */
export function addCourse(req, res) {
  if (!req.body.course.name || !req.body.course.title || !req.body.course.content) {
    res.status(403).end();
  }

  const newCourse = new Course(req.body.course);

  // Let's sanitize inputs
  newCourse.title = sanitizeHtml(newCourse.title);
  newCourse.name = sanitizeHtml(newCourse.name);
  newCourse.content = sanitizeHtml(newCourse.content);

  newCourse.slug = slug(newCourse.title.toLowerCase(), { lowercase: true });
  newCourse.cuid = cuid();
  newCourse.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ course: saved });
  });
}

/**
 * Get a single course
 * @param req
 * @param res
 * @returns void
 */
export function getCourse(req, res) {
  Course.findOne({ cuid: req.params.cuid }).exec((err, course) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ course });
  });
}

/**
 * Delete a course
 * @param req
 * @param res
 * @returns void
 */
export function deleteCourse(req, res) {
  Course.findOne({ cuid: req.params.cuid }).exec((err, course) => {
    if (err) {
      res.status(500).send(err);
    }

    course.remove(() => {
      res.status(200).end();
    });
  });
}
