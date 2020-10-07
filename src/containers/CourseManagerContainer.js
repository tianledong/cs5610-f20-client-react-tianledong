import React from "react";
import CourseHeadingComponent
    from "../components/CourseManager/CourseHeadingComponent";
import '../components/CourseManager/CourseManager.css';
import CourseTableComponent from "../components/CourseManager/CourseTableComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent"
import {
    deleteCourse,
    findAllCourses,
    findCourseById,
    createCourse,
    updateCourse
} from "../services/CourseService";

import {BrowserRouter, Link, Route} from "react-router-dom";

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
                <Route path="/table">
                    <CourseHeadingComponent addNewCourseByTitle={this.addNewCourseByTitle}/>
                    <div className={"wbdv-fixed-padding"}>
                        <CourseTableComponent deleteCourse={this.deleteCourse}
                                              updateCourse={this.updateCourse}
                                              courses={this.state.courses}/>
                    </div>
                </Route>
                <Route path="grid">
                    <CourseHeadingComponent addNewCourseByTitle={this.addNewCourseByTitle}/>
                    <div className={"wbdv-fixed-padding"}>
                    </div>

                </Route>
            </BrowserRouter>
        </div>
    }
}

export default CourseManagerContainer;