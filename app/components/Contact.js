import React    from 'react';
import {Center,
        StaticWidth} from '../styles';

class Contact extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12" style={Center}>
                    <h2 style={Center}>Get in touch.</h2>
                    <p style={StaticWidth} className="clickable">
                        <i className="fa fa-envelope"></i>
                        sam@smessina.com
                    </p>
                    <br/>
                    <p style={StaticWidth} className="clickable">
                        <i className="fa fa-github"></i>
                        github.com/regexpressyourself
                    </p>
                </div>
            </div>

        )
    }
}

export default Contact;
