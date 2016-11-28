import * as React from 'react';
import {Header} from './header';
import {Footer} from './footer';

export const Layout = (props:any) => {
    return (
        <div>
            <Header />
            <div className="content">{props.children}</div>
            <Footer />        
        </div>
    );
}