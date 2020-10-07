import React from "react";
import {Link} from "react-router-dom";

class LessonTabsComponent extends React.Component {
    render() {
        return <header>
            <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand btn wbdv-course-editor wbdv-close"
                   to="/table">
                    <i className="fas fa-times fa-lg text-light"/>
                </Link>

                <div className="d-none d-md-block">
                    <h6 className="navbar-brand wbdv-label wbdv-course-title m-0 p-0">CS5610 - WebDev</h6>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link wbdv-lesson-tabs" to="#">Build</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link wbdv-lesson-tabs" to="#">Pages</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link wbdv-lesson-tabs" to="#">Theme</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link wbdv-lesson-tabs" to="#">Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link wbdv-lesson-tabs" to="#">Apps</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link wbdv-lesson-tabs" to="#">Settings</Link>
                        </li>
                    </ul>
                    <button className="btn col-2 m-1 mr-2 wbdv-lesson-add-btn text-white"><i
                        className="fas fa-lg fa-plus"/></button>
                </div>
            </nav>
        </header>
    }
}
export default LessonTabsComponent;