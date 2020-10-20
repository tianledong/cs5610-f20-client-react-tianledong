import React from "react";
import {connect} from "react-redux";
import lessonService from "../../services/LessonService";
import {Link} from "react-router-dom";

const TopicPillsComponent = (
    {
        finished,
        edit,
        lessonId,
        courseId,
        moduleId,
        topics = [],
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) =>
    <div>
        <ul className="nav nav-pills wbdv-lesson-pill-list w-100 justify-content-end">
            {
                topics.map(topic =>
                                <li key={topic._id} className="nav-item m-2 wbdv-bg">
                                    {
                                        !topic.editing &&
                                        <span className={"row"}>
                    <button className="btn col-2 ml-2" onClick={() => edit(topic)}>
                <i className="fas fa-lg fa-pencil-alt text-light"/>
              </button>
                                            <Link className="nav-link btn wbdv-lesson-tabs col-9"
                                                  to={`/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>{topic.title}</Link>
                  </span>
                                    }
                                    {
                                        topic.editing &&
                                        <span className={"row"}>
              <button className="btn col-1 mx-3" onClick={() =>
                  finished(topic)}>
                <i className="fa fas-lg fa-check text-light"/>
              </button>
                                            <button className="btn col-1 mr-1"
                                                    onClick={() => deleteLesson(topic._id)}>
                                        <i className="fa fa-times text-light"/>
                                    </button>
                                            <input className="col-8 form-control"
                                                   onChange={(event) => updateLesson(
                                                       {
                                                           ...topic,
                                                           title: event.target.value
                                                       })}
                                                   value={topic.title}/>
                  </span>
                                    }
                                </li>
                )
            }
            <li className="nav-item m-2 wbdv-bg wbdv-topic-pill">
                <button onClick={() => createLessonForModule(moduleId)}
                        className="nav-link wbdv-lesson-add-btn btn">
                    <i className="fas fa-plus fa-lg"/>
                </button>
            </li>
        </ul>

    </div>

const stateToPropertyMapper = (state) => ({
    courseId: state.courseReducer.course._id,
    topics: state.topicReducer.topics,
    moduleId: state.lessonReducer.moduleId,
    lessonId: state.lessonReducer.lesssonId
})

const dispatchToPropertyMapper = (dispatch) => ({
    edit: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: true
        }).then(status =>
                    dispatch({
                                 type: "UPDATE_LESSON",
                                 lesson: {...lesson, editing: true},
                             })),
    finished: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: false
        }).then(status => dispatch({
                                       type: "UPDATE_LESSON",
                                       lesson: {...lesson, editing: false},
                                   })),
    updateLesson: (actualLesson) =>
        dispatch({
                     type: "UPDATE_LESSON",
                     lesson: actualLesson,
                 }),
    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                                         type: "DELETE_LESSON",
                                         lessonId
                                     })),
    createLessonForModule: (moduleId) =>
        lessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                                               type: "CREATE_LESSON_FOR_MODULE",
                                               lesson: actualLesson
                                           }))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(TopicPillsComponent)