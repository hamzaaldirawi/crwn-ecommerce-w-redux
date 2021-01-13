import { Component } from "react"; // Will use it because we want to fetch data from firestore, because we want DidMount
//import SHOP_DATA from './shop.data.js' //used before redux
//import { connect } from 'react-redux'; //we don't need after we build collection overview component and imported here
import { connect } from 'react-redux'; // we want it again after using action and types after using firebase 
//import { createStructuredSelector } from 'reselect'; //we don't need after we build collection overview component and imported here

//import { selectShopCollections } from '../../redux/shop/shop-selectors'; //we don't need after we build collection overview component and imported here
import { Route } from 'react-router-dom';
import CollectionsOverview from '../collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'; // to access firebase
import { updateCollections } from "../../redux/shop/shop.actions"; // after using firebase to get shop-data


class ShopPage extends Component {

    unsubscribeFromSnapshot = null; // to unsbscribe from out firestore

    componentDidMount() {
        const { updateCollections } = this.props;
        const CollectionRef = firestore.collection('collections'); // collections as we exported to firebase 

        // to get data from firebase if firebase updated. snapshot object from db
        CollectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        })// we used async because we want to wait to fetch the data
    }

    render() {
        const {match} =this.props;
        return (
            <div className = 'shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
     dispatch(updateCollections(collectionsMap))
})

/*
We converted it back to class to fetch the data from firestore instead of reducer 
const ShopPage = ({ match }) => (
    <div className = 'shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)
*/
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

export default connect(null, mapDispatchToProps)(ShopPage);