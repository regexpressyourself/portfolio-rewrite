import React from 'react';
import ProjectLinks from './ProjectLinks';
import {ProjectRowItem,
        SmallProjectRowItem} from '../styles';

class ProjectDescription extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-sm-6 hidden-xs" style={ProjectRowItem}>
                <h3>{this.props.title}</h3>
                <p>
                    {this.props.description}
                </p>
                <ProjectLinks />
            </div>
        )
    }
}

export default ProjectDescription;
