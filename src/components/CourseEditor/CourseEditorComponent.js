import React from "react";
import "./CourseEditorComponent.css";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {connect} from "react-redux";
import {findCourseById} from "../../services/CourseService";
import moduleService from "../../services/ModuleService"
import lessonService from "../../services/LessonService"
import {Link} from "react-router-dom";
import {setCourses} from "../../actions/courseActions";
import {findModulesForCourse} from "../../actions/moduleActions";
import {findLessonsForModule} from "../../actions/lessonActions";

class CourseEditorComponent extends React.Component {
    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if (moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        if (moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
    }

    render() {
        return <div>
            <header>
                <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand btn wbdv-course-editor wbdv-close"
                          to="#">
                        <i className="fas fa-times fa-lg text-light"/>
                    </Link>

                    <div className="d-none d-md-block">
                        <h6 className="navbar-brand wbdv-label wbdv-course-title m-0 p-0">
                            {this.props.course.title}</h6>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Build</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Pages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Theme</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Apps</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Settings</Link>
                            </li>
                        </ul>
                        <button className="btn col-2 m-1 mr-2 text-white"><i
                            className="fas fa-lg fa-plus"/></button>
                    </div>
                </nav>
            </header>
            <main className="row m-0 wbdv-fixed-padding">
                <div className="col-lg-3 col-md-4 col-sm-5 border-top border-bottom
                border-secondary bg-dark">
                    <ModuleListComponent/>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-7 bg-white p-3">
                    <LessonTabsComponent/>
                    <TopicPillsComponent/>
                    <WidgetListComponent/>
                </div>
            </main>
        </div>
    }
}

const stateToPropertyMapper = (state) => {
    return {
        course: state.courseReducer.course
    }
}

const propertyToDispatchMapper = (dispatch) => ({
        findCourseById: (courseId) => findCourseById(courseId)
            .then(actualCourse => dispatch(setCourses(actualCourse))),

        findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
            .then(actualModules => dispatch(findModulesForCourse(actualModules))),

        findLessonsForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch(findLessonsForModule(lessons)))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorComponent)
