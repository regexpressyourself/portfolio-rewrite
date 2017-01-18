import React       from 'react';
import { HeaderContainerStyle,
         ChevronStyle,
         HeaderInnerStyle} from '../styles';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header style={HeaderContainerStyle}>
                <div style={HeaderInnerStyle}>
                    <i className="fa fa-code" />
                    <h1>Sam Messina</h1>
                    <p>Student | Developer</p>
                </div>
                <a href="#projects" style={ChevronStyle}>
                    <i className="fa fa-chevron-down" />
                </a>
            </header>


        )
    }
}

export default Header;
