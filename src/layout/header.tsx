import * as React from 'react';
import {Link} from 'react-router';

export const Header = (props:any) => {
    return (
        <div>
            <div className="header">
                <h1>DEMO Streaming</h1>
            </div>
            <div className="sub-header">
                <h2><Link to='/'>Popular titles</Link></h2>
            </div>
        </div>
    );
}