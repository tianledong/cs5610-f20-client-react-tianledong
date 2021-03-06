import React from "react";
import {Link} from "react-router-dom";

class CourseRowComponent extends React.Component {
    state = {
        courseBeingEdited: false,
        course: this.props.course
    }

    clickRow = (id) => {
        document.getElementById(id).classList.toggle("table-primary");
    };

    render() {
        return <tr id={this.state.course._id} onClick={() => this.clickRow(this.state.course._id)}>
            <td>
                {this.state.courseBeingEdited &&
                 <input
                     className="form-control"
                     value={this.state.course.title} onChange={(e) => {
                     const newTitle = e.target.value;
                     this.setState(prevState => ({
                         course: {
                             ...prevState.course,
                             title: newTitle,
                             modified: (new Date()).toDateString()
                         }
                     }))
                 }
                 }/>
                }
                {!this.state.courseBeingEdited &&
                 <Link to={`edit/${this.state.course._id}`}><i
                     className="fas fa-file-alt text-primary m-1"/>{this.state.course.title}
                 </Link>
                }
            </td>
            <td className="d-none d-md-table-cell">{this.props.course.owner}</td>
            <td className="d-none d-lg-table-cell">{this.props.course.modified}</td>
            <td>
                {!this.state.courseBeingEdited &&
                 <button
                     onClick={() => this.setState({courseBeingEdited: true})}
                     className="btn wbdv-edit">
                     <i className="fas fa-lg fa-pencil-alt"/>
                 </button>
                }
                {!this.state.courseBeingEdited &&
                 <button
                     onClick={() => this.props.deleteCourse(this.state.course)}
                     className="btn wbdv-remove">
                     <i className="fa fa-lg fa-trash"/>
                 </button>
                }
                {this.state.courseBeingEdited &&
                 <button
                     onClick={() => this.props.editCourse(this.state.course._id, this.state.course)
                         .then(this.setState({
                                                 courseBeingEdited: false
                                             }))}
                     className="btn">
                     <i className="fa fa-lg fa-check"/>
                 </button>
                }
            </td>
        </tr>
    }
}

export default CourseRowComponent;