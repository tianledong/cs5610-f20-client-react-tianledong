import React from "react";
import {connect} from "react-redux";
import lessonService from "../../services/LessonService";
import {Link} from "react-router-dom";
import {createLesson, deleteLesson, updateLesson} from "../../actions/lessonActions";

const LessonTabsComponent = (
    {
        finished,
        edit,
        courseId,
        moduleId,
        lessons = [],
        createLessonForModule,
        deleteLesson,
        updateLesson,
        currentLessonId,
        currentLesson
    }) =>
    <div>
        <ul className="nav nav-pills wbdv-lesson-pill-list w-100 justify-content-end">
            {
                lessons.map(lesson =>
                                <li key={lesson._id}
                                    onClick={() => currentLesson(lesson._id)}
                                    className={`nav-item m-2 ${currentLessonId
                                                                       === lesson._id
                                                                       ? 'btn-primary'
                                                                       : 'wbdv-bg'}`}>
                                    {
                                        !lesson.editing &&
                                        <span className={"row"}>
                    <button className="btn col-2 ml-2" onClick={() => edit(lesson)}>
                <i className="fas fa-lg fa-pencil-alt text-light"/>
              </button>
                                            <Link className="nav-link btn wbdv-lesson-tabs col-9"
                                                  to={`/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}>{lesson.title}</Link>
                  </span>
                                    }
                                    {
                                        lesson.editing &&
                                        <span className={"row"}>
              <button className="btn col-1 mx-3" onClick={() =>
                  finished(lesson)}>
                <i className="fa fas-lg fa-check text-light"/>
              </button>
                                            <button className="btn col-1 mr-1"
                                                    onClick={() => deleteLesson(lesson._id)}>
                                        <i className="fa fa-times text-light"/>
                                    </button>
                                            <input className="col-8 form-control"
                                                   onChange={(event) => updateLesson(
                                                       {
                                                           ...lesson,
                                                           title: event.target.value
                                                       })}
                                                   value={lesson.title}/>
                  </span>
                                    }
                                </li>
                )
            }
            { moduleId &&
                <li className="nav-item m-2 wbdv-bg wbdv-topic-pill">
                    <button onClick={() => createLessonForModule(moduleId)}
                            className="nav-link wbdv-lesson-add-btn btn">
                        <i className="fas fa-plus fa-lg"/>
                    </button>
                </li>
            }
        </ul>

    </div>

const stateToPropertyMapper = (state) => ({
    courseId: state.courseReducer.course._id,
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    currentLessonId: state.lessonReducer.currentLessonId
})

const dispatchToPropertyMapper = (dispatch) => ({
    edit: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: true
        }).then(dispatch({
                             type: "UPDATE_LESSON",
                             lesson: {...lesson, editing: true},
                         })),
    finished: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: false
        }).then(dispatch({
                             type: "UPDATE_LESSON",
                             lesson: {...lesson, editing: false},
                         })),
    updateLesson: (actualLesson) =>
        dispatch(updateLesson(actualLesson)),

    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(dispatch(deleteLesson(lessonId))),
    createLessonForModule: (moduleId) =>
        lessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch(createLesson(actualLesson))),
    currentLesson: (lessonId) =>
        dispatch({
                     type: "CLICK_ON_LESSON",
                     lessonId: lessonId
                 })
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(LessonTabsComponent)