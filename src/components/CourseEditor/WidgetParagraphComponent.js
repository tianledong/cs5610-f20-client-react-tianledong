import React from "react";

export const WidgetParagraphComponent = ({widget, preview}) =>
    <div className="border rounded my-4">
        <div className="row mx-1 my-2">
            <div className="col-md-6 pl-2">
                <h5 className="mt-2">{widget.name}</h5>
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
                <label htmlFor="paragraph-widget-text">Paragraph Text</label>
                <textarea className="form-control" id="paragraph-widget-text" rows="3"
                          placeholder="React is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."/>
            </div>
        </div>
        <div className="row mx-1 my-2">
            <div className="col p-2">
                <label htmlFor="paragraph-widget-name">Widget Name</label>
                <input type="text" className="form-control" id="paragraph-widget-name"
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
                <p>React is an open-source JavaScript library for building user interfaces
                    or UI
                    components. It is maintained by Facebook and a community of individual
                    developers and companies. React can be used as a base in the development
                    of
                    single-page or mobile applications.</p>
            </div>
        </div>
    </div>