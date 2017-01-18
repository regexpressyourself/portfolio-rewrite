import React    from 'react';
import Project from './Project';
import {Center} from '../styles';


class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList: []
        }
    }

    componentDidMount() {
        this.setState({
            projectList: this.createProjectList()
            });
    }

    createProjectList() {
        let projectComponentList = [];

        let i = 0
        for (let projectObject of projectList ) {
            projectComponentList.push(
                <Project key={i}
                         projectKey={i++}
                         projectObject={projectObject}></Project>
            )
        }
        return projectComponentList;
    }

    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-xs-12" style={Center}>
                        <h2>Projects</h2>
                        {this.state.projectList}
                    </div>
                </div>
            </section>
        )
    }
}

const projectList = [
    {
        title: "hello",
        imageSrc: "http://smessina.com/img/ohlogo.png"
    },
    {
        title: "goodbye",
        imageSrc: "http://smessina.com/img/ohlogo.png"
    }
];

export default ProjectSection;
