export const CREATE_WIDGET = "CREATE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";

export const updateWidget = (newWidget) => ({
    type: UPDATE_WIDGET,
    widget: newWidget
})

export const createWidget = (newWidget) => ({
    type: CREATE_WIDGET,
    widget: newWidget
})

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const findWidgetsForTopic = (widgets) => ({
    type: FIND_WIDGETS_FOR_TOPIC,
    widgets: widgets
})


