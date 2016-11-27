import * as Rx from 'rxjs';
import {Item} from './item';
import {hashHistory} from 'react-router';

export class FeedService {
    
    constructor(private feedUrl: string) {        
    }

    fetchItems(type: 'series' | 'movie', skip = 0, take = 21): Rx.Observable<Item[]> {        
        return Rx.Observable.fromPromise(fetch(this.feedUrl, {headers: {'Content-Type': 'application/json'}}))
            .flatMap((response:Response) => {
                if(response.status >= 400) {
                    hashHistory.push('/error');    
                    return null;
                }

                return response.json();
            })
            .map((data:{entries:Item[], totalItems:number}) => {
                let result = data.entries.filter(x => x.programType === type);
                return result;
            });
    }
}