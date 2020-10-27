import React from "react";
import widgetService from "../../services/WidgetService"

class WidgetListComponent extends React.Component {
    state = {
        preview: false
    }
    saveAllWidgets = (topicId, widgets) =>
        widgetService.saveAllWidgetsForTopic(topicId, widgets)
    togglePreview = (prevState) => {
        this.setState({
                          preview: prevState.preview.toggle()
                      }
        )
    }

    render() {
        return <div>
            <div className="w-100">
                <div className="ml-auto text-right">
                    <button className="btn btn-success">save</button>
                    <div className="custom-control custom-switch d-inline-block">
                        <input type="checkbox" className="custom-control-input"
                               id="customSwitches"/>
                        <label className="custom-control-label"
                               htmlFor="customSwitches"><strong>Preview</strong></label>
                    </div>
                </div>
            </div>

            <button className="ml-auto btn btn-success wbdv-add-widget-fixed"
                    title="add new widget">
                <i className="fas fa-plus fa-2x"/>
            </button>
        </div>
    }
}

export default WidgetListComponent;