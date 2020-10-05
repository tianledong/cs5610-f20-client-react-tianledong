import React from "react";
import CourseManagerHeadingComponent
    from "../components/CourseManager/CourseManagerHeadingComponent";
import '../components/CourseManager/CourseManager.css';

class CourseManagerContainer extends React.Component {
    render() {
        return <div className="wbdv-gray-bg">
            <CourseManagerHeadingComponent/>

        </div>
    }
}
export default CourseManagerContainer;