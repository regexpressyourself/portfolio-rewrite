import React    from 'react';
import Project from './Project';
import {ProjectHeader} from '../styles';


class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-xs-12" style={{textAlign: 'center'}}>
                        <h2>Projects</h2>
                    </div>
                </div>
                <Project projectNumber={1}></Project>
                <Project projectNumber={0}></Project>
                {projectList.pro1.title}
                <br/>
                {projectList.pro1.pictureLink}
            </section>
        )
    }
}

const projectList = {
    pro1: {
        title: "hello",
        pictureLink: "pictureLink"
    }
}

export default ProjectSection;
