import React    from 'react';
import {Center} from '../styles';

class Contact extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12" style={Center}>
                    <h2>Get in touch.</h2>
                    <p>
                        <i className="fa fa-envelope"></i>
                        sam@smessina.com
                    </p>
                    <p>
                        <i className="fa fa-github"></i> 
                        github.com/regexpressyourself
                    </p>
                </div>
            </div>

        )
    }
}

export default Contact;
