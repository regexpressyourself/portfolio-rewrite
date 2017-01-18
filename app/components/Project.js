import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectDescription from './ProjectDescription';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        if(this.props.projectKey % 2){
            return (
                <div className="row">
                    <ProjectImage imageSrc={this.props.imageSrc} />
                    <ProjectDescription>
                        here is some text
                    </ProjectDescription>
                </div>
            )
        }
        else {
            return (
                <div className="row">
                    <ProjectDescription>
                        here is some text
                    </ProjectDescription>
                    <ProjectImage imageSrc={this.props.imageSrc} />
                </div>
            )
        }
    }
}

export default Project;
