import React from "react";
import CourseHeadingComponent
    from "../components/CourseManager/CourseHeadingComponent";
import '../components/CourseManager/CourseManagerComponent.css';
import CourseTableComponent from "../components/CourseManager/CourseTableComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent"
import {
    deleteCourse,
    findAllCourses,
    createCourse,
    updateCourse
} from "../services/CourseService";

import {BrowserRouter, Route} from "react-router-dom";
import CourseGridComponent from "../components/CourseManager/CourseGridComponent";

class CourseManagerContainer extends React.Component {
    state = {
        courses: [],
        display: "table"
    }

    updateCourse = (id, course) => updateCourse(id, course)
        .then(this.loadCourses);

    componentDidMount() {
        this.loadCourses();
    }

    loadCourses = () => {
        findAllCourses()
            .then(fetchedCourses => this.setState({courses: fetchedCourses}));
    };
    addNewCourseByTitle = (newCourseTitle) => {
        const newCourse = {
            title: newCourseTitle,
            owner: "me",
            modified: (new Date()).toDateString()
        };
        this.createNewCourse(newCourse).then(actualCourses => this.setState(prevState => ({
            courses: [...prevState.courses, actualCourses]
        })));
    };

    deleteCourse = (course) =>
        deleteCourse(course._id)
            .then(() => this.setState(prevState => ({
                courses: prevState.courses.filter(c => c._id !== course._id)
            })));

    createNewCourse = (newCourse) => createCourse(newCourse);

    render() {
        return <div>
            <BrowserRouter>
                <Route
                    path="/edit/:courseId"
                    exact
                    component={CourseEditorComponent}/>
                <Route path="/" exact>
                    <CourseHeadingComponent addNewCourseByTitle={this.addNewCourseByTitle}/>
                    <div className={"wbdv-fixed-padding"}>
                        <CourseTableComponent deleteCourse={this.deleteCourse}
                                              updateCourse={this.updateCourse}
                                              courses={this.state.courses}/>
                    </div>
                </Route>
                <Route path="/grid" exact>
                    <CourseHeadingComponent addNewCourseByTitle={this.addNewCourseByTitle}/>
                    <div className={"wbdv-fixed-padding"}>
                        <CourseGridComponent deleteCourse={this.deleteCourse}
                                             updateCourse={this.updateCourse}
                                             courses={this.state.courses}/>
                    </div>
                </Route>
            </BrowserRouter>
            <button className="btn wbdv-button wbdv-add-course-abs"
                    onClick={() => this.addNewCourseByTitle("")}>
                <i className="fas fa-3x text-danger fa-plus-circle"/></button>
        </div>
    }
}

export default CourseManagerContainer;