import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectDescription from './ProjectDescription';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            imageSrc: ""
        }
    }
    componentDidMount() {
        if (this.props.projectObject) {
            this.setState({
                title: this.props.projectObject.title,
                imageSrc: this.props.projectObject.imageSrc,
                description: this.props.projectObject.description,
                backgroundStyle: this.props.projectObject.background
            });
        }
    }
    render() {
        if(this.props.projectKey % 2){
            return (
                <div className="row">
                    <ProjectImage imageSrc={this.state.imageSrc}
                                  backgroundStyle={this.state.backgroundStyle} />
                    <ProjectDescription title={this.state.title}
                                        description={this.state.description}>
                    </ProjectDescription>
                </div>
            )
        }
        else {
            return (
                <div className="row">
                    <ProjectDescription title={this.state.title}
                                        description={this.state.description}>
                    </ProjectDescription>
                    <ProjectImage imageSrc={this.state.imageSrc} />
                </div>
            )
        }
    }
}

export default Project;
