import React from "react";
import {connect} from "react-redux";
import moduleService from "../../services/ModuleService"
import {Link} from "react-router-dom";

const ModuleListComponent = (
    {
        course = {},
        modules = [],
        deleteModule,
        createModule,
        updateModule,
        edit,
        ok,
        currentModuleId,
        currentModule
    }) =>
    <div>
        <ul className="nav nav-pills nav-fill p-3 wbdv-module-list">
            {
                modules.map(module =>

                                <li key={module._id}
                                    onClick={() => currentModule(module._id)}
                                    className={`nav-item nav-link m-2 d-flex w-100 wbdv-bg wbdv-module-item ${currentModuleId
                                                                                                              === module._id
                                                                                                              ? 'active'
                                                                                                              : ''}`}>
                                    {
                                        !module.editing &&
                                        <span className={"row"}>
                                            <Link
                                                className="col-10 btn btn-lg text-uppercase"
                                                to={`/edit/${course._id}/modules/${module._id}`}>
                    {module.title}
                  </Link>
                  <button className="btn wbdv-course-editor wbdv-close col-2"
                          onClick={() => edit(module)}>
                    <i className="fas fa-lg fa-pencil-alt text-light"/>
                  </button>

                </span>
                                    }
                                    {
                                        module.editing &&
                                        <span className={"row"}>
                                            <input className="col-8 form-control"
                                                   onChange={(event) => updateModule(
                                                       {
                                                           ...module,
                                                           title: event.target.value
                                                       })}
                                                   value={module.title}/>
                <button className="btn wbdv-course-editor col-2"
                        onClick={() => ok(module)}>
                  <i className="fa fa-lg fa-check text-light"/>
                </button>
                                            <button
                                                onClick={() => deleteModule(module)}
                                                className="btn wbdv-course-editor wbdv-close col-2 mr-auto wbdv-module-item-delete-btn">
                                        <i className="fas fa-times fa-lg text-light"/>
                                    </button>
              </span>
                                    }
                                </li>
                )
            }
            <li className="nav-item nav-link m-2 d-flex w-100 wbdv-bg wbdv-module-item">
                <button onClick={() => createModule(course)}
                        className="btn wbdv-course-editor wbdv-close mx-auto wbdv-module-item-add-btn">
                    <i className="fas fa-plus fa-lg text-light"/>
                </button>
            </li>
        </ul>
    </div>

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course,
    currentModuleId: state.moduleReducer.currentModuleId
})

const propertyToDispatchMapper = (dispatch) => ({
    ok: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: false
        }).then(status => dispatch({
                                       type: "UPDATE_MODULE",
                                       module: {...module, editing: false}
                                   })),
    edit: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: true
        }).then(
            dispatch({
                         type: "UPDATE_MODULE",
                         module: {...module, editing: true}
                     })),
    deleteModule: (module) =>
        moduleService.deleteModule(module._id)
            .then(dispatch({
                                         type: "DELETE_MODULE",
                                         module: module
                                     })),
    createModule: (course) =>
        moduleService.createModuleForCourse(course._id, {
            title: "New Module"
        }).then(actualModule => dispatch({
                                             type: "CREATE_MODULE",
                                             module: actualModule
                                         })),
    updateModule: (module) =>
        dispatch({
                     type: "UPDATE_MODULE",
                     module: module
                 }),

    currentModule: (moduleId) =>
        dispatch({
                     type: "CLICK_ON_MODULE",
                     moduleId: moduleId
                 })
})

export default connect
(stateToPropertyMapper,
 propertyToDispatchMapper)
(ModuleListComponent)