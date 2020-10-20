import React from "react";
import {connect} from "react-redux";
import {createModule, findModulesForCourse} from "../../actions/moduleActions";
import lessonService from "../../services/LessonService";
import moduleService from "../../services/ModuleService";
import {findLessonsForModule} from "../../actions/lessonActions";
import ModuleListItemComponent from "./ModuleListItemComponent";

class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId);
    }

    render() {
        return <ul className="nav nav-pills nav-fill p-3 wbdv-module-list">
            {
                this.props.modules &&
                this.props.modules.map(
                    (module) =>
                        <ModuleListItemComponent
                            key={module._id}
                            module={module}/>
                )
            }
            <li className="nav-item nav-link m-2 d-flex w-100 wbdv-bg wbdv-module-item">
                <button onClick={() => this.props.createModule(this.props.courseId)}
                        className="btn wbdv-course-editor wbdv-close mx-auto wbdv-module-item-add-btn">
                    <i className="fas fa-plus fa-lg text-light"/>
                </button>
            </li>
        </ul>
    }
}

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => {
    return {
        findModulesForCourse: (courseId) =>
        moduleService.findModulesForCourse(courseId)
              .then(actualModules => dispatch(findModulesForCourse(actualModules))),

        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: 'New Module'})
                .then(actualModule => dispatch(createModule(actualModule)))
        },
        findAllLessonsForModule: (id) =>
            lessonService.findAllLessonsForModule(id)
                .then(actual => dispatch(findLessonsForModule(actual))),
    }
};

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ModuleListComponent)