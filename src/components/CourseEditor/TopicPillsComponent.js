import React from "react";

class TopicPillsComponent extends React.Component {
    render() {
    return <ul className="nav nav-pills wbdv-topic-pill-list w-100 wbdv-topic-pill-list">
        <li className="nav-item m-2 wbdv-bg">
            <a className="nav-link btn wbdv-topic-pill" href="#">Topic 1</a>
        </li>
        <li className="nav-item m-2 wbdv-bg">
            <a className="nav-link active h-100 btn wbdv-topic-pill" href="#">Topic 2</a>
        </li>
        <li className="nav-item m-2 wbdv-bg">
            <a className="nav-link wbdv-bg btn wbdv-topic-pill" href="#">Topic 3</a>
        </li>
        <li className="nav-item m-2 wbdv-bg">
            <a className="nav-link wbdv-bg btn wbdv-topic-pill" href="#">Topic 4</a>
        </li>
        <li className="nav-item m-2 wbdv-bg wbdv-topic-pill">
            <button className="nav-link wbdv-topic-add-btn wbdv-bg btn"><i
                className="fas fa-plus fa-lg"/></button>
        </li>
    </ul>
    }
}
export default TopicPillsComponent;