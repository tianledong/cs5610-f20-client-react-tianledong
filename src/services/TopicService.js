const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/tianledong/lessons"
const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/tianledong/topics"

export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateTopic = (topic) =>
    fetch(`${topicUrl}/${topic._id}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "DELETE"
    }).then(response => response.json())

export default {
    findTopicsForLesson,
    createTopicForLesson,
    updateTopic,
    deleteTopic
}