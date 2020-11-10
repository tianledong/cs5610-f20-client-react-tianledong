import React, {useState} from "react";
import widgetService from "../../services/WidgetService";
import {connect} from "react-redux";
import {createWidget} from "../../actions/widgetActions";
import WidgetHeadingComponent from "./WidgetHeadingComponent";
import WidgetParagraphComponent from "./WidgetParagraphComponent";
import ListWidgetComponent from "./ListWidgetComponent";

const WidgetListComponent = ({widgets, topicId, createWidgetForTopic}) => {
    const [preview, setPreview] = useState(false);

    const saveAllWidgets = (topicId, widgets) =>
        widgetService.saveAllWidgetsForTopic(topicId, widgets)

    const togglePreview = () => {
        setPreview(!preview)
    }

    return <div>
        {topicId &&
         <div className="w-100">
             <div className="ml-auto text-right">
                 <button className="btn btn-success"
                         onClick={() => saveAllWidgets(topicId, widgets)}>Save
                 </button>
                 <div className="custom-control custom-switch d-inline-block">
                     <input type="checkbox" className="custom-control-input"
                            id="customSwitches" onClick={() => togglePreview()}/>
                     <label className="custom-control-label"
                            htmlFor="customSwitches"><strong>Preview</strong></label>
                 </div>
             </div>
         </div>
        }
        {widgets &&
         widgets.map((widget, index) => {
             switch (widget.type) {
                 case "HEADING":
                     return <WidgetHeadingComponent key={widget.id} widget={widget}
                                                    preview={preview} index={index}
                                                    length={widgets.length}/>
                 case "PARAGRAPH":
                     return <WidgetParagraphComponent key={widget.id} widget={widget}
                                                      preview={preview} index={index}
                                                      length={widgets.length}/>
                 case "LIST":
                     return <ListWidgetComponent key={widget.id} widget={widget}
                                                      preview={preview} index={index}
                                                      length={widgets.length}/>

                 default:
                     break;
             }
             // if (widget.type === "HEADING") {
             //     return <WidgetHeadingComponent key={widget.id} widget={widget}
             //                                    preview={preview} index={index}
             //                                    length={widgets.length}/>
             // } else if (widget.type === "PARAGRAPH") {
             //     return <WidgetParagraphComponent key={widget.id} widget={widget}
             //                                      preview={preview} index={index}
             //                                      length={widgets.length}/>
             // }
         })}

        {topicId &&
         <button className="ml-auto btn btn-success wbdv-add-widget-fixed"
                 title="add new widget"
                 onClick={() => createWidgetForTopic(topicId)}>
             <i className="fas fa-plus fa-2x"/>
         </button>
        }
    </div>
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId
})

const dispatchToPropertyMapper = (dispatch) => ({
    createWidgetForTopic: (topicId) =>
        widgetService.createWidgetForTopic(
            topicId, {
                type: 'HEADING',
                size: 1,
                style: 'ORDERED'
            })
            .then(actualWidget => dispatch(createWidget(actualWidget)))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(WidgetListComponent)