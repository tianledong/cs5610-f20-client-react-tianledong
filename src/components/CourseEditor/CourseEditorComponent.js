import React from "react";
import "./CourseEditor.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/js/all.min.js";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

class CourseEditorComponent extends React.Component {
    render() {
        return <div>
            <LessonTabsComponent/>
            <main className="row m-0 wbdv-fixed-padding">
                <div className="col-lg-3 col-md-4 col-sm-5 border-top border-bottom
                border-secondary bg-dark">
                    <ModuleListComponent/>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-7 bg-white p-3">
                    <TopicPillsComponent/>
                    <WidgetListComponent/>
                </div>
            </main>
        </div>
    }
}

export default CourseEditorComponent;
