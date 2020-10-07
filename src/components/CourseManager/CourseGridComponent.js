import React from "react";
import {Link} from "react-router-dom";
import CourseCardComponent from "./CourseCardComponent";

class CourseGridComponent extends React.Component {
    render() {
        return <div className="wbdv-gray-bg">
            <div className="d-block navbar navbar-expand">
                <div className="navbar-nav nav row">
                    <h6 className="col-5 pt-2 wbdv-header wbdv-title ml-md-3"><strong>Recent documents</strong>
                    </h6>
                    <div className="col-5 pt-2 row">
                        <h6 className="wbdv-header wbdv-owner text-center"><strong>Owned by
                            me</strong>
                        </h6>
                        <button className="btn wbdv-btn-down wbdv-header wbdv-sort"><i
                            className="mb-2 fa fa-sort-down fa-lg"/></button>
                    </div>
                    <div className="row-cols-2 float-right text-right">
                        <Link to="/grid"
                              className="btn wbdv-button wbdv-grid-layout">
                            <i className="fas fa-lg fa-grip-horizontal"/>
                        </Link>
                        <Link to="/"
                              className="btn wbdv-button wbdv-list-layout">
                            <i className="fas fa-lg fa-sort-alpha-down"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                {
                    this.props.courses.map(
                        course => <CourseCardComponent editCourse={this.props.updateCourse}
                                                       deleteCourse={this.props.deleteCourse}
                                                       course={course}/>)
                }
                </div>
            </div>
        </div>
    }
}

export default CourseGridComponent;