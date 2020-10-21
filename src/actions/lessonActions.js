export const CREATE_LESSON_FOR_MODULE = "CREATE_LESSON_FOR_MODULE";
export const UPDATE_LESSON = "UPDATE_LESSON";
export const DELETE_LESSON = "DELETE_LESSON";
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE";

export const updateLesson = (newLesson) => ({
    type: UPDATE_LESSON,
    lesson: newLesson
})

export const createLesson = (newLesson) => ({
    type: CREATE_LESSON_FOR_MODULE,
    lesson: newLesson
})

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const findLessonsForModule = (lessons) => ({
    type: FIND_LESSONS_FOR_MODULE,
    lessons: lessons
})


