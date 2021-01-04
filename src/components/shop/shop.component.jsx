//import { Component } from "react";
//import SHOP_DATA from './shop.data.js'
//import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';

//import { selectShopCollections } from '../../redux/shop/shop-selectors';
import { Route } from 'react-router-dom';
import CollectionOverview from '../collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

const ShopPage = ({ match }) => (
    <div className = 'shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

/*
//before using redux >>
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
*/
/*
we don't need after we build collection overview component and imported here
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})
*/ 

export default ShopPage;