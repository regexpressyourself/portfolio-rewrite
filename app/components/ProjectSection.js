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
            <section id="project-section" className="container">
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
        title: "OrderUp HookUp",
        description: "OrderUp HookUp is an web app boasting an intuitive front end to Yelp's API",
        imageSrc: "http://smessina.com/img/ohlogo.png",
        background: {backgroundColor: '#E6FAED'}
    },
    {
        title: "Woody At Random",
        description: "A Woody Allen recommendation website using a LAMP stack",
        imageSrc: "http://smessina.com/img/woody.png",
        background: {backgroundColor: 'black'}
    },
    {
        title: "Turbo Pup Band Site",
        description: "Website for the band Turbo Pup",
        imageSrc: "http://smessina.com/img/turbo.png",
        background: {backgroundImage: 'http://smessina.com/img/turbo.png'}
    },
    {
        title: "Q Programming Language",
        description: "A programming language to allow simple queue manipulation",
        imageSrc: "http://smessina.com/img/qlanguage.png",
        background: {backgroundColor: '#FFF176'}
    },
    {
        title: "Scheduler.py",
        description: "A command-line program to automate employee scheduling",
        imageSrc: "http://smessina.com/img/scheduler.png",
        background: {backgroundColor: '#282A36'}
    },

];

export default ProjectSection;
