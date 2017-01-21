import React    from 'react';
import Project  from './Project';
import {Center,
        ProjectRowItem} from '../styles';


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
            let imageOnRight = (i % 2 == 0);
            projectComponentList.push(
                <Project key={i++}
                         imageOnRight={imageOnRight}
                         projectObject={projectObject}></Project>
            )
        }
        return projectComponentList;
    }

    render() {
        return (
            <section id="project-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12" style={Center}>
                            <h2>Projects</h2>
                            <div>
                                {this.state.projectList}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const projectList = [
    {
        title: "Git Flow",
        description: "Interactive git cheat sheet",
        imageSrc: "http://smessina.com/img/GitFlowLogo.png",
        background: {backgroundColor: '#f9f2f4'},
        projectLink: "http://smessina/com/gitflow",
        githubLink: "https://www.github.com/regexpressyourself/gitflow"
    },
    {
        title: "OrderUp HookUp",
        description: "Web app boasting an intuitive front end to Yelp's API",
        imageSrc: "http://smessina.com/img/ohlogo.png",
        background: {backgroundColor: '#E6FAED'},
        projectLink: "http://orderuphookup.com",
        githubLink: "https://www.github.com/regexpressyourself/OrderUp-HookUp"
    },
    {
        title: "Woody At Random",
        description: "Woody Allen recommendation website using a LAMP stack",
        imageSrc: "http://smessina.com/img/woody.png",
        background: {backgroundColor: '#000000'},
        projectLink: "http://www.woodyatrandom.com",
        githubLink: "https://www.github.com/regexpressyourself/Woody-At-Random"
    },
    {
        title: "Q Programming Language",
        description: "Programming language to allow simple queue manipulation",
        imageSrc: "http://smessina.com/img/qlanguage.png",
        background: {backgroundColor: '#FFF176'},
        projectLink: "http://smessina.com/Q-Programming-Language",
        githubLink: "https://www.github.com/regexpressyourself/Q-Programming-Language"
    },
    {
        title: "Scheduler.py",
        description: "Command-line program to automate employee scheduling",
        imageSrc: "http://smessina.com/img/scheduler.png",
        background: {backgroundColor: '#282A36'},
        projectLink: "",
        githubLink: "https://www.github.com/regexpressyourself/Scheduler.py"
    },
    {
        title: "Turbo Pup Band Site",
        description: "Website for the band Turbo Pup",
        imageSrc: "http://smessina.com/img/turbo.png",
        background: {backgroundImage: 'url("http://smessina.com/img/turbo-bg.png")'},
        projectLink: "http://smessina.com/Turbo-Pup-Site",
        githubLink: "https://www.github.com/regexpressyourself/Turbo-Pup-Site"
    }

];

export default ProjectSection;
