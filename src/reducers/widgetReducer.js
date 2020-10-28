import 'array.prototype.move';

const initialState = {
    widgets: []
};

export const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case "MOVE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.move(action.from, action.to)
            }
        default:
            return state
    }
}

export default widgetReducer;