export const CREATE_TOPIC = "CREATE_TOPIC";
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";

export const updateTopic = (newTopic) => ({
    type: UPDATE_TOPIC,
    topic: newTopic
})

export const createTopic = (newTopic) => ({
    type: CREATE_TOPIC,
    lesson: newTopic
})

export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const findTopicsForLesson = (topics) => ({
    type: FIND_TOPICS_FOR_LESSON,
    topics: topics
})


