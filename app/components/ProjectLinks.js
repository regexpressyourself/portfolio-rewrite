import React from 'react';
import {ProjectRowItem,
        SmallProjectRowItem} from '../styles';

class ProjectLinks extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="project-link-wrapper row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <a href="http://smessina.com" className="clickable project-link left">
                        <i className="fa fa-link"></i> Link
                    </a>

                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <br className="hidden-sm hidden-md hidden-lg"/>
                    <a href="http://smessina.com" className="clickable project-link right">
                        <i className="fa fa-github"></i> Github
                    </a>

                </div>
            </div>
        )
    }
}

export default ProjectLinks;
