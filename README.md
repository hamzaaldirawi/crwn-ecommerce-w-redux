# Create E-Commerce using React and SASS with Redux

  - Install React using 
	```
	npx create-react-app crwn-ecommerce
	```

  - Create Homepage component

  - Install SASS using 
	```
	npm install node-sass --save-dev
	```

  - Create Directory, Collection, Shop, Menu Item Component
  
  - Install firebase using 
  	```
	npm install firebase --save-dev
	```
	
  - Setup firebase utils and paste config code to src 
  
  - Integreate firebase into app, created sign in page with sign in with Google
  
  - Implement firebase utils, included ability to store authenticated user

  - Install Redux, React Redux, Redux Logger using: 
	```
	npm install --save-dev redux react-redux redux-logger
	```
  - Implement userReducer and userActions to header and app component:	
	- Store
	- Connect
	- Logger
	- Provider 

  - Update our app to redirect to home page if user is signed in

  - Add cartIcon and cartDropdown components

  - Implement Cart reducer to Cart Components 

  - Update cart utils to group items in cart reducer

  - Create Cart item component and connect cart dropdown with cartItems reducer

  - Update the app with reselect, replace cart selectors with memoized selectors
	install selector to the project :
	```
	npm install reselect --save-dev
	```

  - Update our mapStateToProps using createStructuredSelector from reselect in the whole app
	>> Using createStructuredSelector is good, because in future it may help if we decided to grow our app.
	
  - Add checkout page, checkout item component and update cart to use selectors

  - Add addItem and removeItem functionality from checkout item component

  - Install redux-persist to use localStorage or sessionStorage using: 
	```
	npm install redux-persist --save-dev
	```
	
  - Update store, root reducer, and index to use redux-persist to storage 'cache' cart

  - Update Directory, Shop state into react-redux reducer and reselect

  - Normalize Data in SHOP_DATA from array to object to avoid using find method

  - Install React Stripe Checkout using:
	```
	npm install react-stripe-checkout --save-dev
	```

  - Update Stripe Integration, favicon and title