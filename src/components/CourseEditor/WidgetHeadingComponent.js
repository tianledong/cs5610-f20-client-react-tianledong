import React from "react";

const WidgetHeadingComponent = (props) =>
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
                <select className="custom-select m-1">
                    <option value="heading" selected>Heading</option>
                    <option value="paragraph">Paragraph</option>
                    <option value="list">List</option>
                    <option value="image">Image</option>
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
                <select className="custom-select" id="heading-widget-size">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                    <option>Heading 5</option>
                    <option>Heading 6</option>
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