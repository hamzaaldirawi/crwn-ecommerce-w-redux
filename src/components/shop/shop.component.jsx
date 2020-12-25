import { Component } from "react";
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            collections : SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
            <div className = 'shop-page'>
                {
                    collections.map(({id, ...otherCollectionPreview}) => (
                        <CollectionPreview key={id} {...otherCollectionPreview} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;