import * as React from 'react';
import * as Rx from 'rxjs';
import {FeedService} from './feeds/feedService';
import {Item, Image} from './feeds/item';

export class Series extends React.Component<{}, {items: Item[]}> {

    private _service: FeedService;
    private _subscription: Rx.Subscription;

    constructor() {
        super();
        this._service = new FeedService('feed/sample.json');
        this.state = {
            items: []
        };        
    } 

    componentWillMount(): void {
        this._subscription = this._service.fetchItems('movie')
            .subscribe(result => {
                this.setState({items: result});
            });
    }

    componentWillUnmount(): void {
        if(this._subscription) {
            this._subscription.unsubscribe();
        }
    }

    render(): JSX.Element {
        const tiles = this.state.items.map((x:Item, index:number) => {
            return <div className="col" key={index}>{x.title}</div>
        });
        return <div>{tiles}</div>;
    }
}