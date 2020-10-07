import React from "react";

class CourseHeadingComponent extends React.Component {
    state = {
        newCourseName: ''
    }

    render() {
        return <header>
            <nav className="navbar navbar-expand navbar-dark bg-primary fixed-top">
                <button type={"button"} className="navbar-brand btn wbdv-field wbdv-hamburger">
                    <i className="fas fa-bars text-light"/>
                </button>
                <div className="d-none d-md-block">
                    <h5 className="navbar-brand wbdv-label wbdv-course-manager m-0 p-0">Course
                        Manager</h5>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav ml-auto">
                        <form className="form-inline row">
                            <input className="form-control mr-2 col-9 wbdv-field wbdv-new-course"
                                   value={this.state.newCourseName}
                                   type="text" onChange={(e) => this.setState({
                                                                                  newCourseName: e.target.value
                                                                              })}
                                   placeholder="New Course Title"/>
                            <button className="btn col-2 m-1 mr-2 wbdv-field wbdv-add-course"
                                    onClick={() => this.props.addNewCourseByTitle(this.state.newCourseName)
                                        .then(this.state.newCourseName.then(this.setState({
                                                                                        newCourseName: ''
                                                                                    })))}>
                                <i className="fas fa-plus"/></button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    }
}
export default CourseHeadingComponent;