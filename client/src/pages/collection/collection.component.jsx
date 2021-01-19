//import {useEffect} from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
//import { firestore } from '../../firebase/firebase.utils';

import { selectCollection } from '../../redux/shop/shop-selectors';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  // (we don't really want it) Just to explain how to use useEffect instead of didmount and willunmount
  /*
  useEffect(() => {
    // eauql didmount
    const unsubscribeFromCollection = firestore
      .collection('collections')
      .onSnapshot(snapshot => console.log(snapshot))
    return () => {
      //called clean-up function, equal to componentwillunmount 
      unsubscribeFromCollection()
    }
  }, [])
  // empty because I want it to fire only once 
  // I can add to array what I want to listen that cause refire 
  */
 
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
