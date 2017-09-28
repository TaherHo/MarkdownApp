import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (<nav className="nav navbar-default">
            <div className="navbar-header">
                <a className="navbar-brand">MarkdownApp</a>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <a>sign in</a>
                </li>
                <li>
                    <a>add markdown</a>
                </li>
            </ul>

        </nav>);
    }

}

export default Header ;