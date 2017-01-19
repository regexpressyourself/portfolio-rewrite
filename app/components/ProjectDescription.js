import React from 'react';
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
                <span className="clickable">
                    <i className="fa fa-link"></i> Link
                </span>
                <span className="clickable">
                    <i className="fa fa-github"></i> Github
                </span>
            </div>
        )
    }
}

export default ProjectDescription;
