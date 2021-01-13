import './App.css';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './components/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument} from './firebase/firebase.utils';
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'; // we just add it once to add shop-date to firebase
import { setCurrentUser } from './redux/user/user-actions'; 
import { selectCurrentUser } from './redux/user/user-selectors';
// import { selectCollectionsForPreview } from './redux/shop/shop-selectors'; // we just add it once to add shop-date to firebase 


class App extends Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    // const {setCurrentUser, collectiosArray} = this.props; // we just add it once to add shop-date to firebase 

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          }
        )
      } 
      
      setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections' , collectiosArray.map(({ title, items })=> ({ title, items}))) // we just add it once to add shop-date to firebase
      // collectionsArray.map(obj => obj) but we destructured what we want, because firestore will generate uniqe id so we don't need id and route name 
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => 
              this.props.currentUser ? 
              (<Redirect to='/' />)
              :
              (<SignInSignOut />)
            }
          />
        </Switch>
      </div>
    )
  }
} 

// To redirect user when sign in
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectiosArray: selectCollectionsForPreview // we just add it once to add shop-date to firebase 
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps /* For user Redirect insted of null */, mapDispatchToProps)(App);
