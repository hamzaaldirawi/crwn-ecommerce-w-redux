import './App.css';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './components/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions'; 
import { selectCurrentUser } from './redux/user/user-selectors';


class App extends Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

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
      
      setCurrentUser(userAuth)
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
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps /* For user Redirect insted of null */, mapDispatchToProps)(App);
