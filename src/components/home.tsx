import * as React from 'react';
import {Link} from 'react-router';

export class Home extends React.Component<{}, {}> {

    render(): JSX.Element {
        return (<div className="flex-grid">
            <div className="col">
                <Link to="/series">
                    Series
                </Link>
            </div> 
            <div className="col">
                <Link to="/movies">
                    Movies
                </Link>
            </div> 
        </div>);
    }
}