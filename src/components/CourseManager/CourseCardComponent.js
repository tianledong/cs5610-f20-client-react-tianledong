import React from "react";
import {Link} from "react-router-dom";

class CourseCardComponent extends React.Component {
    state = {
        courseBeingEdited: false,
        course: this.props.course
    }

    render() {
        return <div className="col-lg-2 col-md-4 col-sm-12 mb-3">
            <div className={"card text-center"}>
                <img className="card-img-top mb-2" src={require("../../wbdv-pic.jpeg")}
                     alt="Card image cap"/>
                <div className="card-body">
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
                     <Link to={`edit/${this.state.course._id}`}>{this.state.course.title}
                     </Link>
                    }
                    <p className="card-text text-muted"><i
                        className="fas fa-file-alt text-primary m-1"/>Modified {this.state.course.modified}
                    </p>
                    <div className="mt-auto">
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
                             onClick={() => this.props.editCourse(this.state.course._id,
                                                                  this.state.course)
                                 .then(this.setState({
                                                         courseBeingEdited: false
                                                     }))}
                             className="btn">
                             <i className="fa fa-lg fa-check"/>
                         </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CourseCardComponent;