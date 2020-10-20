import React from "react";
import {connect} from "react-redux";
import topicService from "../../services/TopicService";
import {Link} from "react-router-dom";

const TopicPillsComponent = (
    {
        finished,
        edit,
        lessonId,
        courseId,
        moduleId,
        topics = [],
        createTopicForLesson,
        deleteTopic,
        updateTopic
    }) =>
    <div>
        <ul className="nav nav-pills wbdv-lesson-pill-list w-100">
            {
                topics &&
                topics.map(topic =>
                                <li key={topic._id} className="nav-item m-2 wbdv-bg">
                                    {
                                        !topic.editing &&
                                        <span className={"row"}>
                    <button className="btn col-2 ml-2" onClick={() => edit(topic)}>
                <i className="fas fa-lg fa-pencil-alt text-light"/>
              </button>
                                            <Link className="nav-link btn wbdv-lesson-tabs col-9"
                                                  to={"#"}>{topic.title}</Link>
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
                                                    onClick={() => deleteTopic(topic._id)}>
                                        <i className="fa fa-times text-light"/>
                                    </button>
                                            <input className="col-8 form-control"
                                                   onChange={(event) => updateTopic(
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
                <button onClick={() => createTopicForLesson(lessonId)}
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
    lessonId: state.topicReducer.lessonId
})

const dispatchToPropertyMapper = (dispatch) => ({
    edit: (topic) =>
        topicService.updateTopic(topic._id, {
            ...topic, editing: true
        }).then(status =>
                    dispatch({
                                 type: "UPDATE_TOPIC",
                                 topic: {...topic, editing: true},
                             })),
    finished: (topic) =>
        topicService.updateTopic(topic._id, {
            ...topic, editing: false
        }).then(status => dispatch({
                                       type: "UPDATE_TOPIC",
                                       topic: {...topic, editing: false},
                                   })),
    updateTopic: (actualTopic) =>
        dispatch({
                     type: "UPDATE_TOPIC",
                     topic: actualTopic,
                 }),
    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => dispatch({
                                         type: "DELETE_TOPIC",
                                         topicId
                                     })),
    createTopicForLesson: (lessonId) =>
        topicService.createTopicForLesson(
            lessonId, {
                title: "New Topic"
            })
            .then(actualTopic => dispatch({
                                               type: "CREATE_TOPIC",
                                               topic: actualTopic
                                           }))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(TopicPillsComponent)