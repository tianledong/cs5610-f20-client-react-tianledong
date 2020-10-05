import React from "react";
import CourseManagerHeadingComponent
    from "../components/CourseManager/CourseManagerHeadingComponent";
import '../components/CourseManager/CourseManager.css';

class CourseManagerContainer extends React.Component {
    render() {
        return <div>
            <CourseManagerHeadingComponent/>
        </div>
    }
}
export default CourseManagerContainer;