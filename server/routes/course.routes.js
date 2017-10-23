import { Router } from 'express';
import * as CourseController from '../controllers/course.controller';
const router = new Router();

// Get all Courses
router.route('/courses').get(CourseController.getCourses);

// Get one course by cuid
router.route('/courses/:cuid').get(CourseController.getCourse);

// Add a new Course
router.route('/courses').post(CourseController.addCourse);

// Delete a course by cuid
router.route('/courses/:cuid').delete(CourseController.deleteCourse);

export default router;
