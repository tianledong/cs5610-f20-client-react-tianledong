import React from "react";

class WidgetListComponent extends React.Component {
    render() {
        return <div>
            <div className="w-100">
                <div className="ml-auto text-right">
                    <button className="btn btn-success">save</button>
                    <div className="custom-control custom-switch d-inline-block">
                        <input type="checkbox" className="custom-control-input" id="customSwitches"/>
                            <label className="custom-control-label"
                                   htmlFor="customSwitches"><strong>Preview</strong></label>
                    </div>
                </div>
            </div>
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
            <div className="border rounded my-4">
                <div className="row mx-1 my-2">
                    <div className="col-md-6 pl-2">
                        <h5 className="mt-2">Paragraph Widget</h5>
                    </div>
                    <div className="col-md-6 d-flex ml-auto pr-0">
                        <div className="btn btn-warning m-1">
                            <i className="fas fa-arrow-up"/>
                        </div>
                        <div className="btn btn-warning m-1">
                            <i className="fas fa-arrow-down"/>
                        </div>
                        <select className="custom-select m-1">
                            <option value="heading">Heading</option>
                            <option value="paragraph" selected>Paragraph</option>
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
            <div className="border rounded my-4">
                <div className="row mx-1 my-2">
                    <div className="col-md-6 pl-2">
                        <h5 className="mt-2">List Widget</h5>
                    </div>
                    <div className="col-md-6 d-flex ml-auto pr-0">
                        <div className="btn btn-warning m-1">
                            <i className="fas fa-arrow-up"/>
                        </div>
                        <div className="btn btn-warning m-1">
                            <i className="fas fa-arrow-down"/>
                        </div>
                        <select className="custom-select m-1">
                            <option value="heading">Heading</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="list" selected>List</option>
                            <option value="image">Image</option>
                        </select>
                        <div className="btn btn-danger m-1">
                            <i className="fas fa-times"/>
                        </div>
                    </div>
                </div>
                <div className="row mx-1 my-2">
                    <div className="col p-2">
                        <label htmlFor="list-widget-item">List Item</label>
                        <textarea className="form-control" id="list-widget-item" rows="3"
                                  placeholder="Basic usage
Notable features
Common idioms"/>
                    </div>
                </div>
                <div className="row mx-1 my-2">
                    <div className="col p-2">
                        <label htmlFor="list-widget-type">List Type</label>
                        <select className="custom-select" id="list-widget-type">
                            <option selected>Ordered List</option>
                            <option>Unordered List</option>
                        </select>
                    </div>
                </div>
                <div className="row mx-1 my-2">
                    <div className="col p-2">
                        <label htmlFor="list-widget-name">Widget Name</label>
                        <input type="text" className="form-control" id="list-widget-name"
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
                        <ol>
                            <li>Basic usage</li>
                            <li>Notable features</li>
                            <li>Common idioms</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="border rounded my-4">
                <div className="row mx-1 my-2">
                    <div className="col-md-6 pl-2">
                        <h5 className="mt-2">Image Widget</h5>
                    </div>
                    <div className="col-md-6 d-flex ml-auto pr-0">
                        <div className="btn btn-warning m-1">
                            <i className="fas fa-arrow-up"/>
                        </div>
                        <div className="btn btn-warning m-1">
                            <i className="fas fa-arrow-down"/>
                        </div>
                        <select className="custom-select m-1">
                            <option value="heading">Heading</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="list">List</option>
                            <option value="image" selected>Image</option>
                        </select>
                        <div className="btn btn-danger m-1">
                            <i className="fas fa-times"/>
                        </div>
                    </div>
                </div>
                <div className="row mx-1 my-2">
                    <div className="col p-2">
                        <label htmlFor="image-widget-url">Image URL</label>
                        <input className="form-control" id="image-widget-url"
                               placeholder="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                    </div>

                </div>
                <div className="row mx-1 my-2">
                    <div className="col p-2">
                        <label htmlFor="image-widget-name">Widget Name</label>
                        <input type="text" className="form-control" id="image-widget-name"
                               placeholder="Widget name" />
                    </div>
                </div>
                <div className="row mx-1 my-2">
                    <div className="col p-2">
                        <h5>Preview</h5>
                    </div>
                </div>
                <div className="row mx-1 my-2">
                    <div className="col p-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="react-img" className="react-img"/>
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