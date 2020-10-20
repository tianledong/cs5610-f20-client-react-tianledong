import React from "react";
import {Link} from "react-router-dom";

class ModuleListItemComponent extends React.Component {
    state = {
        isEditing: false,
        module: this.props.module
    }

    render() {
        return <li className="nav-item nav-link d-flex w-100 m-2 wbdv-bg wbdv-module-item"><Link
            className="col-10 wbdv-module-item-title text-left wbdv-module-item-title" to="#">{this.state.module}</Link>
            <button
                className="btn wbdv-course-editor wbdv-close col-2 ml-auto wbdv-module-item-delete-btn">
                <i className="fas fa-times fa-lg text-light"/>
            </button>
        </li>
    }
}

export default ModuleListItemComponent;