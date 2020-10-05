import React from "react";

class ModuleListComponent extends React.Component {
    render() {
        return <ul className="nav nav-pills nav-fill p-3 wbdv-module-list">
            <li className="nav-item nav-link d-flex w-100 m-2 wbdv-bg wbdv-module-item"><a
                className="col-10 wbdv-module-item-title text-left wbdv-module-item-title">Module
                1
                - jQuery</a>
                <button
                    className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-delete-btn">
                    <i className="fas fa-times fa-lg text-light"/>
                </button>
            </li>
            <li className="nav-item nav-link active d-flex w-100 wbdv-bg m-2 wbdv-module-item">
                <a
                    className="col-10 wbdv-module-item-title text-left wbdv-module-item-title">Module
                    2
                    - React</a>
                <button
                    className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-delete-btn">
                    <i className="fas fa-times fa-lg text-light"/>
                </button>
            </li>
            <li className="nav-item nav-link m-2 d-flex w-100 m-2 wbdv-bg wbdv-module-item"><a
                className="col-10 wbdv-module-item-title text-left wbdv-module-item-title">Module
                3
                - Redux</a>
                <button
                    className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-delete-btn">
                    <i className="fas fa-times fa-lg text-light"/>
                </button>
            </li>
            <li className="nav-item nav-link m-2 d-flex w-100 wbdv-bg wbdv-module-item"><a
                className="col-10 wbdv-module-item-title text-left wbdv-module-item-title">Module
                4
                - Native</a>
                <button
                    className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-delete-btn">
                    <i className="fas fa-times fa-lg text-light"/>
                </button>
            </li>
            <li className="nav-item nav-link m-2 d-flex w-100 wbdv-bg wbdv-module-item"><a
                className="col-10 wbdv-module-item-title text-left wbdv-module-item-title">Module
                5
                - Angular</a>
                <button
                    className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-delete-btn">
                    <i className="fas fa-times fa-lg text-light"/>
                </button>
            </li>
            <li className="nav-item nav-link m-2 d-flex w-100 wbdv-bg wbdv-module-item"><a
                className="col-10 wbdv-module-item-title text-left wbdv-module-item-title">Module
                6
                - Node</a>
                <button
                    className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-delete-btn">
                    <i className="fas fa-times fa-lg text-light"/>
                </button>
            </li>
            <li className="nav-item nav-link m-2 d-flex w-100 wbdv-bg wbdv-module-item"><a
                className="col-10 wbdv-module-item-title text-left wbdv-module-item-title">Module
                7
                - Mongo</a>
                <button
                    className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-delete-btn">
                    <i className="fas fa-times fa-lg text-light"/>
                </button>
            </li>
            <li className="nav-item nav-link m-2 d-flex w-100 wbdv-bg wbdv-module-item"><input
                className="col-10 text-left form-control" placeholder="New module title"/>
                <button
                    className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-add-btn">
                    <i className="fas fa-plus fa-lg text-light"/>
                </button>
            </li>
        </ul>
    }
}

export default ModuleListComponent;