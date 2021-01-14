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
// we have to import with spinner here because shop page is know if our component loading or not
import WithSpinner from '../../components/with-spinner/with-spinner.components'; // to fetch async data from db

// this will give us back a new component wrapped around the component that we passed in and using this new component
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    /*
    constructor() {
        super();

        this.state = {
            loading: true
        }
    } equal //react backend will handle this and invoke super
    */

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null; // to unsbscribe from out firestore

    componentDidMount() {
        const { updateCollections } = this.props;
        const CollectionRef = firestore.collection('collections'); // collections as we exported to firebase 

        // to get data from firebase if firebase updated. snapshot object from db
        CollectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false}); // used for spinner
        })// we used async because we want to wait to fetch the data
    }

    render() {
        const {match} =this.props;
        const {loading} = this.state;
        return (
            <div className = 'shop-page'>
                <Route 
                    exact
                    path={`${match.path}`} 
                    render = {props => ( 
                        <CollectionsOverviewWithSpinner isLoading = {loading} {...props} />
                        )} 
                    />
                <Route 
                    path={`${match.path}/:collectionId`}
                    render = {props => (
                        <CollectionPageWithSpinner isLoading = {loading} {...props} />
                        )} 
                    />
            </div>
        )

        /*
        Was like this but we need to use render to pass in a function
        and we pass props becasue we want match and history property in collections overview and page 
        to fetch data from db in async
            return (
                <div className = 'shop-page'>
                    <Route exact path={`${match.path}`} component={CollectionsOverview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </div>
        )
        */
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