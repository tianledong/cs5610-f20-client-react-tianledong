import React from "react";
import {Link} from "react-router-dom";

class LessonTabsComponent extends React.Component {
    render() {
        return <ul className="nav nav-pills wbdv-lesson-pill-list w-100 justify-content-end">
            <li className="nav-item m-2 btn-primary">
                <Link className="nav-link btn wbdv-lesson-tabs" href="#">Topic 1</Link>
            </li>
            <li className="nav-item m-2 btn-primary wbdv-topic-pill">
                <button className="nav-link wbdv-lesson-add-btn btn"><i
                    className="fas fa-plus fa-lg"/></button>
            </li>
        </ul>
    }
}
export default LessonTabsComponent;