import * as React from 'react';
import {Link} from 'react-router';

export const Home = (props:any) => {
    return (
        <div className="flex-grid">
            <div className="col">
                <div className="tile">
                    <Link to="/series">
                        <h3>Series</h3>
                        <p>Popular series</p>
                    </Link>
                </div>
            </div> 
            <div className="col">
                <div className="tile">
                    <Link to="/movies">                    
                        <h3>Movies</h3>
                        <p>Popular movies</p>     
                    </Link>
                </div>
            </div> 
        </div>);
};