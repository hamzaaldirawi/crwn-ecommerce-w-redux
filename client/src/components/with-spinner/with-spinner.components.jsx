/*
we created this file because when we want to open for example shop/hats
it failed because we modifed our reducer with collections null so it return error of null in compiler because 
we fetched the data from db with async, so create this file to wait until the app load the data
*/

import Spinner from '../spinner/spinner.component';
/*
const WithSpinner = WrappedComponent => {
    const SpinnerLoading = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <Spinner />
        ) : (<WrappedComponent {...otherProps} />)
    };
    return SpinnerLoading;
};
*/
/*
OR 
*/
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <Spinner />
        ) : (<WrappedComponent {...otherProps} />)
    };


export default WithSpinner;