import * as Rx from 'rxjs';
import {Item} from './item';

export class FeedService {
    
    constructor(private feedUrl: string) {        
    }

    fetchItems(type: 'series' | 'movie', skip = 0, take = 21): Rx.Observable<{loading: boolean, items: Item[]}> {
        return Rx.Observable.create((obs:Rx.Observer<{loading: boolean, items: Item[]}>) => {
            obs.next({loading: true, items: []});

            fetch(this.feedUrl, {headers: {'Content-Type': 'application/json'}})
                .then((response:Response) => {
                    
                    if(response.status >= 400) {
                        obs.error({status: response.status, statusText: response.statusText});    
                        return;
                    }

                    response.json().then((data:{entries:Item[], totalItems:number}) => {
                        let result = data.entries
                            .filter(x => x.programType === type)
                            .slice(skip, skip + take);
                        
                        obs.next({loading: false, items: result});
                        obs.complete();
                    });
                })
                .catch((error:any) => obs.error(error));
        });
    }
}