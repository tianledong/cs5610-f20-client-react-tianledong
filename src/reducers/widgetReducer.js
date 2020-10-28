import 'array.prototype.move';

const initialState = {
    widgets: []
};
const swapOrder = (from, to, widgets) => {
    let newWidgets = [...widgets];
    newWidgets[from] = newWidgets.splice(to, 1, newWidgets[from])[0];
    return newWidgets;
}

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
            const newWidgets = swapOrder(action.from, action.to, state.widgets);
            console.log(newWidgets);
            return {
                ...state,
                widgets: newWidgets
            }
        default:
            return state
    }
}

export default widgetReducer;