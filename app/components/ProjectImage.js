import React from 'react';

class ProjectImage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-sm-4">
                <img className="img-responsive"
                     alt="Project Logo"
                     src={this.props.imageSrc} />
            </div>
        )
    }
}

export default ProjectImage;
