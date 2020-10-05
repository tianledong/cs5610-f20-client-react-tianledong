import React from "react";

class CourseManagerHeadingComponent extends React.Component {
    state = {
        courseName: ''
    }

    render() {
        return <header>
            <nav className="navbar navbar-expand navbar-dark bg-primary fixed-top">
                <button type={"button"} className="navbar-brand btn wbdv-field wbdv-hamburger">
                    <i className="fas fa-bars text-light"/>
                </button>
                <div className="d-none d-md-block">
                    <a className="navbar-brand wbdv-label wbdv-course-manager" href="#">Course
                        Manager</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav ml-auto">
                        <form className="form-inline row">
                            <input className="form-control mr-2 col-9 wbdv-field wbdv-new-course"
                                   type="text"
                                   placeholder="New Course Title"/>
                            <button className="btn col-2 m-1 mr-2 wbdv-field wbdv-add-course">
                                <i className="fas fa-plus"/></button>
                        </form>
                    </div>
                </div>
            </nav>
            <main className="wbdv-fixed-padding">
                <div className="d-none d-lg-block navbar navbar-expand wbdv-gray-bg container">
                    <div className="navbar-nav nav row">
                        <div className="col-6 pt-2 row">
                            <h6 className="wbdv-header wbdv-title"><strong>Title</strong></h6>
                            <button className="btn wbdv-btn-abs wbdv-header wbdv-sort"><i
                                className="mb-2 fas fa-sort-up fa-lg"/></button>
                        </div>
                        <div className="col-2 pt-2 row">
                            <h6 className="wbdv-header wbdv-owner text-center"><strong>Owned
                                by</strong>
                            </h6>
                        </div>
                        <h6 className="col-2 pt-2 wbdv-header wbdv-last-modified text-center">
                            <strong>Last
                                modified</strong>
                        </h6>
                        <div className="row-cols-2 float-right text-right">
                            <button type="button"
                                    className="btn col-5 wbdv-button wbdv-grid-layout">
                                <i className="fas fa-lg fa-grip-horizontal"/>
                            </button>
                            <button type="button"
                                    className="btn col-5 wbdv-button wbdv-list-layout">
                                <i className="fas fa-lg fa-sort-alpha-down mb-1"/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </header>
    }
}

export default CourseManagerHeadingComponent;