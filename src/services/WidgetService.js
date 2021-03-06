const topicUrl = "https://whiteboard-f20.herokuapp.com/api/topics"
const widgetUrl = "https://whiteboard-f20.herokuapp.com/api/widgets";

export const findWidgetsForTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}/widgets`)
        .then(response => response.json())

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${topicUrl}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const saveAllWidgetsForTopic = (topicId, widgets) =>
    fetch(`${topicUrl}/${topicId}/widgets`, {
        method: "PUT",
        body: JSON.stringify(widgets),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${widgetUrl}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${widgetUrl}/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())


export default {
    findWidgetsForTopic,
    createWidgetForTopic,
    saveAllWidgetsForTopic,
    updateWidget,
    deleteWidget
}