export default {
  locale: 'en',
  messages: {
    siteTitle: 'RoboLearn',
    addCourse: 'Add Course',
    switchLanguage: 'Switch Language',
    by: 'By',
    deleteCourse: 'Delete Course',
    createNewCourse: 'Create new course',
    authorName: "Author's Name",
    courseTitle: 'Course Title',
    courseDescription: 'Course Description',
    submit: 'Submit',
    comment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	}`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {does not have <i style='font-style: italic'>any</i> comments}
    	  =1 {has <i style='font-style: italic'>#</i> comment}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	}`,
    nestedDateComment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	} as of {date}`
  }
};
