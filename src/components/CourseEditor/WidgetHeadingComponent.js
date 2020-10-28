import React from "react";
import widgetService from "../../services/WidgetService";
import {deleteWidget, moveWidget, updateWidget} from "../../actions/widgetActions";
import {connect} from "react-redux";

const WidgetHeadingComponent = ({widget, preview, index, updateWidget, deleteWidget, moveWidget}) =>
    <div className="border rounded my-4">
        {preview === false &&
         <div>
             <div className="row mx-1 my-2">
                 <div className="col-md-6 pl-2">
                     <h5 className="mt-2">Heading Widget</h5>
                 </div>
                 <div className="col-md-6 d-flex ml-auto pr-0">
                     <div className="btn btn-warning m-1"
                          onClick={() => moveWidget(index, index - 1)}>
                         <i className="fas fa-arrow-up"/>
                     </div>
                     <div className="btn btn-warning m-1"
                          onClick={() => moveWidget(index, index + 1)}>
                         <i className="fas fa-arrow-down"/>
                     </div>
                     <select className="custom-select m-1" value={widget.type} onChange={event => {
                         updateWidget({
                                          ...widget,
                                          type: event.target.value
                                      })
                     }}>
                         <option value="HEADING">Heading</option>
                         <option value="PARAGRAPH">Paragraph</option>
                     </select>
                     <div className="btn btn-danger m-1" onClick={() => deleteWidget(widget.id)}>
                         <i className="fas fa-times"/>
                     </div>
                 </div>
             </div>
             <div className="row mx-1 my-2">
                 <div className="col p-2">
                     <label htmlFor={`heading-widget-text-${widget.id}`}>Heading Text</label>
                     <input type="text" className="form-control" value={ widget.text || ""}
                            id={`heading-widget-text-${widget.id}`}
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
                     <label htmlFor={`heading-widget-size-${widget.id}`}>Heading Size</label>
                     <select className="custom-select" id={`heading-widget-size-${widget.id}`}
                             value={widget.size || 1 } onChange={event => {
                         updateWidget({
                                          ...widget,
                                          size: parseInt(event.target.value)
                                      })
                     }}>
                         <option value="1">Heading 1</option>
                         <option value="2">Heading 2</option>
                         <option value="3">Heading 3</option>
                         <option value="4">Heading 4</option>
                         <option value="5">Heading 5</option>
                         <option value="6">Heading 6</option>
                     </select>
                 </div>
             </div>
             <div className="row mx-1 my-2">
                 <div className="col p-2">
                     <label htmlFor={`heading-widget-name-${widget.id}`}>Widget Name</label>
                     <input type="text" className="form-control"
                            id={`heading-widget-name-${widget.id}`}
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
                 {widget.size === 1 && <h1>{widget.text}</h1>}
                 {widget.size === 2 && <h2>{widget.text}</h2>}
                 {widget.size === 3 && <h3>{widget.text}</h3>}
                 {widget.size === 4 && <h4>{widget.text}</h4>}
                 {widget.size === 5 && <h5>{widget.text}</h5>}
                 {widget.size === 6 && <h6>{widget.text}</h6>}
             </div>
         </div>
        }
        {preview &&
         <div className="row mx-1 my-2">
             <div className="col p-2">
                 {widget.size === 1 && <h1>{widget.text}</h1>}
                 {widget.size === 2 && <h2>{widget.text}</h2>}
                 {widget.size === 3 && <h3>{widget.text}</h3>}
                 {widget.size === 4 && <h4>{widget.text}</h4>}
                 {widget.size === 5 && <h5>{widget.text}</h5>}
                 {widget.size === 6 && <h6>{widget.text}</h6>}
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
        widgetService.deleteWidget(widgetId)
            .then(dispatch(deleteWidget(widgetId))),
    moveWidget: (from, to) =>
        dispatch(moveWidget(from, to))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(WidgetHeadingComponent)