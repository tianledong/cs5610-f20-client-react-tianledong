import React from "react";
import "../components/CourseEditor/CourseEditorComponent.css";
import LessonTabsComponent from "../components/CourseEditor/LessonTabsComponent";
import ModuleListComponent from "../components/CourseEditor/ModuleListComponent";
import TopicPillsComponent from "../components/CourseEditor/TopicPillsComponent";
import WidgetListComponent from "../components/CourseEditor/WidgetListComponent";
import {connect} from "react-redux";
import {findCourseById} from "../services/CourseService";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService";
import {Link} from "react-router-dom";
import {setCourses} from "../actions/courseActions";
import {findModulesForCourse} from "../actions/moduleActions";
import topicService from "../services/TopicService";
import widgetService from "../services/WidgetService"

class CourseEditorContainer extends React.Component {
    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId

        this.props.currentModule(null);

        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if (moduleId) {
            this.props.findLessonsForModule(moduleId)
            this.props.currentModule(moduleId)
        } else {
            this.props.findLessonsForModule(null)
            this.props.currentModule(null)
        }
        if (lessonId) {
            this.props.findTopicsForLesson(lessonId)
            this.props.currentLesson(lessonId)
        } else {
            this.props.findTopicsForLesson(null)
            this.props.currentLesson(null)
        }

        if (topicId) {
            this.props.findWidgetsForTopic(topicId)
            this.props.currentTopic(topicId)
        } else {
            this.props.findWidgetsForTopic(null)
            this.props.currentTopic(topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId

        if (!moduleId) {
            this.props.findLessonsForModule(null);
            this.props.currentLesson(null);
        } else if (moduleId && moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId);
            this.props.currentLesson(null);
        }

        if (!courseId) {
            this.props.findModulesForCourse(null);
            this.props.currentModule(null);
        } else if (courseId && courseId !== prevProps.match.params.courseId) {
            this.props.currentModule(null);
            this.props.findModulesForCourse(courseId);
        }

        if (!lessonId) {
            this.props.findTopicsForLesson(null);
            this.props.currentTopic(null);
        } else if (lessonId && lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
            this.props.currentTopic(null);
        }

        if (!topicId) {
            this.props.findWidgetsForTopic(null);
        } else if (topicId && topicId !== prevProps.match.params.topicId) {
            this.props.findWidgetsForTopic(topicId)
        }

    }

    render() {
        return <div>
            <header>
                <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand btn wbdv-course-editor wbdv-close"
                          to="/">
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
            <main className="row m-0 wbdv-fixed-padding bg-dark h-100">
                <div className="col-lg-3 col-md-4 col-sm-5 border-top border-bottom
                border-secondary bg-dark h-100">
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
            .then(lessons => dispatch({
                                          type: "FIND_LESSONS_FOR_MODULE",
                                          lessons,
                                          moduleId
                                      })),
    findWidgetsForTopic: (topicId) =>
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                                          type: "FIND_WIDGETS_FOR_TOPIC",
                                          widgets,
                                          topicId
                                      })),
    findTopicsForLesson: (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                                         type: "FIND_TOPICS_FOR_LESSON",
                                         topics,
                                         lessonId
                                     })),
    currentModule: (moduleId) =>
        dispatch({
                     type: "CLICK_ON_MODULE",
                     moduleId: moduleId
                 }),
    currentLesson: (lessonId) =>
        dispatch({
                     type: "CLICK_ON_LESSON",
                     lessonId: lessonId
                 }),
    currentTopic: (topicId) =>
        dispatch({
                     type: "CLICK_ON_TOPIC",
                     topicId: topicId
                 })
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)
