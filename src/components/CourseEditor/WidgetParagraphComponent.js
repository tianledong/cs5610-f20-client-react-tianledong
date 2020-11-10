import React from "react";
import {deleteWidget, moveWidget, updateWidget} from "../../actions/widgetActions";
import {connect} from "react-redux";
import WidgetService from "../../services/WidgetService";

export const WidgetParagraphComponent = ({widget, preview, index, updateWidget, deleteWidget, moveWidget, length}) =>
    <div className="border rounded my-4">
        {preview === false &&
         <div>
             <div className="row mx-1 my-2">
                 <div className="col-md-6 pl-2">
                     <h5 className="mt-2">Paragraph Widget</h5>
                 </div>
                 <div className="col-md-6 d-flex ml-auto pr-0">
                     {index > 0 &&
                      <div className="btn btn-warning m-1"
                           onClick={() => moveWidget(index, index - 1)}>
                          <i className="fas fa-arrow-up"/>
                      </div>
                     }
                     {index < length - 1 &&
                      <div className="btn btn-warning m-1"
                           onClick={() => moveWidget(index, index + 1)}>
                          <i className="fas fa-arrow-down"/>
                      </div>
                     }
                     <select className="custom-select m-1" value={widget.type} onChange={event => {
                         updateWidget({
                                          ...widget,
                                          type: event.target.value
                                      })
                     }}>
                         <option value="HEADING">Heading</option>
                         <option value="PARAGRAPH">Paragraph</option>
                         <option value="LIST">List</option>
                         <option value="IMAGE">Image</option>
                     </select>
                     <div className="btn btn-danger m-1" onClick={() => deleteWidget(widget.id)}>
                         <i className="fas fa-times"/>
                     </div>
                 </div>
             </div>
             <div className="row mx-1 my-2">
                 <div className="col p-2">
                     <label htmlFor={`paragraph-widget-text-${widget.id}`}>Paragraph Text</label>
                     <textarea rows={3} className="form-control" value={widget.text || ""}
                            id={`paragraph-widget-text-${widget.id}`}
                            onChange={event => {
                                updateWidget({
                                                 ...widget,
                                                 text: event.target.value
                                             })
                            }}/>
                 </div>
             </div>
             <div className="row mx-1 my-2">
                 <div className="col p-2">
                     <label htmlFor={`paragraph-widget-name-${widget.id}`}>Widget Name</label>
                     <input type="text" className="form-control"
                            id={`paragraph-widget-name-${widget.id}`}
                            value={widget.name || ""} onChange={event => {
                         updateWidget({
                                          ...widget,
                                          name: event.target.value
                                      })
                     }}/>
                 </div>
             </div>
         </div>
        }

        {preview === false &&
         <div className="row mx-1 my-2">
             <div className="col p-2">
                 <h5>Preview</h5>
             </div>
         </div>
        }
        {preview === false &&
         <div className="row mx-1 my-2">
             <div className="col p-2">
                 <p>{widget.text}</p>
             </div>
         </div>
        }
        {preview &&
         <div className="row mx-1 my-2">
             <div className="col p-2">
                 <p>{widget.text}</p>
             </div>
         </div>
        }
    </div>

const stateToPropertyMapper = (state) => ({})

const dispatchToPropertyMapper = (dispatch) => ({
    //only update to redux
    updateWidget: (widget) =>
        dispatch(updateWidget(widget)),
    deleteWidget: (widgetId) =>
        WidgetService.deleteWidget(widgetId).then(
            dispatch(deleteWidget(widgetId))),
    moveWidget: (from, to) =>
        dispatch(moveWidget(from, to))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(WidgetParagraphComponent)