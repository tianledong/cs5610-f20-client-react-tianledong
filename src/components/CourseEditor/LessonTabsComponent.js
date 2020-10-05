import React from "react";

class LessonTabsComponent extends React.Component {
    render() {
        return <header>
            <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
                <a className="navbar-brand btn wbdv-course-editor wbdv-close"
                   href="#">
                    <i className="fas fa-times fa-lg text-light"/>
                </a>

                <div className="d-none d-md-block">
                    <a className="navbar-brand wbdv-label wbdv-course-title">CS5610 - WebDev</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link wbdv-lesson-tabs" href="#">Build</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link wbdv-lesson-tabs" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-lesson-tabs" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-lesson-tabs" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-lesson-tabs" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-lesson-tabs" href="#">Settings</a>
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