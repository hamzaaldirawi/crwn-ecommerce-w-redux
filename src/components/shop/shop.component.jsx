import { Component } from "react"; 
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverviewContainer from '../collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container'; 

import { fetchCollectionsStart } from "../../redux/shop/shop.actions"; 

class ShopPage extends Component {
    
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null; 

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();      
    }

    render() {
        const {match} =this.props;
       
        return(
            <div className = 'shop-page'>
                <Route 
                    exact
                    path={`${match.path}`} 
                    component = {CollectionOverviewContainer}
                    />
                <Route 
                    path={`${match.path}/:collectionId`}
                    component = {CollectionPageContainer}
                    />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);