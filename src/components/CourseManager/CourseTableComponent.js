import React from "react";

import CourseRowComponent from "./CourseRowComponent";

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
                        <th scope="col"><strong>Owned by</strong></th>
                        <th scope="col"><strong>Last modified</strong></th>
                        <th scope="col">
                            <button type="button"
                                    className="btn wbdv-button wbdv-grid-layout">
                                <i className="fas fa-lg fa-grip-horizontal"/>
                            </button>
                            <button type="button"
                                    className="btn wbdv-button wbdv-list-layout">
                                <i className="fas fa-lg fa-sort-alpha-down"/>
                            </button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                                                   <CourseRowComponent
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