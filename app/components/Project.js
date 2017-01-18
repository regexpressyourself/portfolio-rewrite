import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class1: "col-sm-" + (this.props.projectNumber%2*4+4),
            class2: "col-sm-" + ((this.props.projectNumber+1)%2*4+4)
        }
    }
    render() {
        return (
            <div className="row">
                <div className={this.state.class1}>
                    <img alt="this was an img" src=""/>
                </div>
                <div className={this.state.class2}>
                    here is some text
                </div>
            </div>
        )
    }
}

export default Project;
