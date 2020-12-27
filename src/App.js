import './App.css';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './components/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        )
      } 
      
      this.setState({ currentUser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignOut} />
        </Switch>
      </div>
    )
  }
} 

export default App;
