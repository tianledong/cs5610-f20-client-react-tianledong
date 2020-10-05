import React from "react";
import '../components/CourseManager/CourseManager.css'
import CourseManagerHeadingComponent
    from "../components/CourseManager/CourseManagerHeadingComponent";

class CourseManagerContainer extends React.Component {
    render() {
        return <div>
            <CourseManagerHeadingComponent/>
        </div>
    }
}
export default CourseManagerContainer;