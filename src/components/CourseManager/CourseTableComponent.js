import React from "react";

import CourseRowComponent from "./CourseRowComponent";
import {Link} from "react-router-dom";

class CourseTableComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">
                            <strong>Title</strong>
                            <button className="btn p-0 m-0">
                          <i className="fas fa-sort-up p-0 m-0"/></button></th>
                        <th scope="col" className="d-none d-md-table-cell"><strong>Owned by</strong></th>
                        <th scope="col" className="d-none d-lg-table-cell"><strong>Last modified</strong></th>
                        <th scope="col">
                            <Link to="/grid"
                                    className="btn wbdv-button wbdv-grid-layout">
                                <i className="fas fa-lg fa-grip-horizontal"/>
                            </Link>
                            <Link to="/"
                                    className="btn wbdv-button wbdv-list-layout">
                                <i className="fas fa-lg fa-sort-alpha-down"/>
                            </Link></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                                                   <CourseRowComponent
                                                       key={course._id}
                                                       editCourse={this.props.updateCourse}
                                                       deleteCourse={this.props.deleteCourse}
                                                       course={course}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CourseTableComponent;