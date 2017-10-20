import { ADD_COURSE, ADD_COURSES, DELETE_COURSE } from './CourseActions';

// Initial State
const initialState = { data: [] };

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        data: [action.course, ...state.data]
      };

    case ADD_COURSES:
      return {
        data: action.courses
      };

    case DELETE_COURSE:
      return {
        data: state.data.filter(course => course.cuid !== action.cuid)
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all courses
export const getCourses = state => state.courses.data;

// Get course by cuid
export const getCourse = (state, cuid) =>
  state.courses.data.filter(course => course.cuid === cuid)[0];

// Export Reducer
export default CourseReducer;
