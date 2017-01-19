import React from 'react';

class ProjectDescription extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-sm-8">
                <h3>{this.props.title}</h3>
                <p>
                    {this.props.description}

                </p>
            </div>
        )
    }
}

export default ProjectDescription;
