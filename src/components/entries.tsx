import * as Rx from 'rxjs';
import * as React from 'react';
import {FeedService} from '../feeds/feedService';
import {Item} from '../feeds/item';
import {Error} from './error';
import {Loading} from './loading';

export interface EntriesProps {
    type: 'series' | 'movie';
}

interface EntriesState {
    items: Item[];
    isLoading: boolean;
    isError?: boolean;    
}

export class Entries extends React.Component<EntriesProps, EntriesState> {

    private _service: FeedService;
    private _subscription: Rx.Subscription;

    constructor() {
        super();
        this._service = new FeedService('feed/sample.json');
        this.state = {
            items: [],
            isLoading: true,
            isError: false
        };        
    } 

    componentWillMount(): void {
        this._subscription = this._service
            .fetchItems(this.props.type)
            .subscribe(result => {
                this.setState({
                    isLoading: result.loading,
                    items: result.items                    
                });
            }, error => {
                this.setState({
                    isLoading: false,
                    items: [],
                    isError: true                    
                });
            });
    }

    componentWillUnmount(): void {
        if(this._subscription) {
            this._subscription.unsubscribe();
        }
    }

    render(): JSX.Element {
        if(this.state.isError) {
            return <Error />;
        }

        if(this.state.isLoading) {
            return <Loading />;
        }

        const tiles = this.state.items.map((x:Item, index:number) => {
            return <div className="col" key={index}>{x.title}</div>
        });

        return <div className="flex-grid">{tiles}</div>;
    }
}