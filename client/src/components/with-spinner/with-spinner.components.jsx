/*
we created this file because when we want to open for example shop/hats
it failed because we modifed our reducer with collections null so it return error of null in compiler because 
we fetched the data from db with async, so create this file to wait until the app load the data
*/

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (<WrappedComponent {...otherProps} />)
    };
    return Spinner;
};

export default WithSpinner;