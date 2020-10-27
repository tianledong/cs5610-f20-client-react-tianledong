import React from "react";
import widgetService from "../../services/WidgetService";
import {createWidget} from "../../actions/widgetActions";
import {connect} from "react-redux";

export const WidgetHeadingComponent = ({widget, preview}) =>
    <div className="border rounded my-4">
        <div className="row mx-1 my-2">
            <div className="col-md-6 pl-2">
                <h5 className="mt-2">Heading Widget</h5>
            </div>
            <div className="col-md-6 d-flex ml-auto pr-0">
                <div className="btn btn-warning m-1">
                    <i className="fas fa-arrow-up"/>
                </div>
                <div className="btn btn-warning m-1">
                    <i className="fas fa-arrow-down"/>
                </div>
                <select className="custom-select m-1" defaultValue={widget.type}>
                    <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                </select>
                <div className="btn btn-danger m-1">
                    <i className="fas fa-times"/>
                </div>
            </div>
        </div>
        <div className="row mx-1 my-2">
            <div className="col p-2">
                <label htmlFor="heading-widget-text">Heading Text</label>
                <input type="text" className="form-control" id="heading-widget-text"
                       placeholder="Heading text"/>
            </div>
        </div>
        <div className="row mx-1 my-2">
            <div className="col p-2">
                <label htmlFor="heading-widget-size">Heading Size</label>
                <select className="custom-select" id="heading-widget-size" defaultValue={widget.size}>
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
            </div>
        </div>
        <div className="row mx-1 my-2">
            <div className="col p-2">
                <label htmlFor="heading-widget-name">Widget Name</label>
                <input type="text" className="form-control" id="heading-widget-name"
                       placeholder="Widget name"/>
            </div>
        </div>
        <div className="row mx-1 my-2">
            <div className="col p-2">
                <h5>Preview</h5>
            </div>
        </div>
        <div className="row mx-1 my-2">
            <div className="col p-2">
                <h1>Heading Text</h1>
            </div>
        </div>
    </div>

const stateToPropertyMapper = (state) => ({})

const dispatchToPropertyMapper = (dispatch) => ({
    createWidgetForTopic: (topicId) =>
        widgetService.createWidgetForTopic(
            topicId, {
                type: "HEADING"
            })
            .then(actualWidget => dispatch(createWidget(actualWidget)))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(WidgetHeadingComponent)