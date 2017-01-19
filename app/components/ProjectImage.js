import React from 'react';
import {ProjectRowItem} from '../styles';

class ProjectImage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-sm-6 hidden-xs" style={ProjectRowItem}>
                <div style={this.props.backgroundStyle}
                     className="project-image-background">
                    <img className="img-responsive"
                         alt="Project Logo"
                         src={this.props.imageSrc} />
                </div>
            </div>
        )
    }
}

export default ProjectImage;
