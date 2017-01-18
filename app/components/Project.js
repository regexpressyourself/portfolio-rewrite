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
                imageSrc: this.props.projectObject.imageSrc
            });
        }
    }
    render() {
        if(this.props.projectKey % 2){
            return (
                <div className="row">
                    <ProjectImage imageSrc={this.state.imageSrc} />
                    <ProjectDescription>
                        {this.state.title}
                    </ProjectDescription>
                </div>
            )
        }
        else {
            return (
                <div className="row">
                    <ProjectDescription>
                        {this.state.title}
                    </ProjectDescription>
                    <ProjectImage imageSrc={this.state.imageSrc} />
                </div>
            )
        }
    }
}

export default Project;
