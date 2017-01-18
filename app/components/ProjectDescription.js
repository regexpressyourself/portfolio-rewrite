import React from 'react';

class ProjectDescription extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-sm-8">
                <p>
                    {this.props.children}
                </p>
            </div>
        )
    }
}

export default ProjectDescription;
