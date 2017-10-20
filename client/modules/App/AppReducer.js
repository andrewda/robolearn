// Import Actions
import { TOGGLE_ADD_COURSE } from './AppActions';

// Initial State
const initialState = {
  showAddCourse: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_COURSE:
      return {
        showAddCourse: !state.showAddCourse
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddCourse
export const getShowAddCourse = state => state.app.showAddCourse;

// Export Reducer
export default AppReducer;
