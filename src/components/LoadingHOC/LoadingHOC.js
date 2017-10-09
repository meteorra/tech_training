import React from 'react';
import { branch, renderComponent } from 'recompose';
import PropTypes from 'prop-types';

// const withLoadingSpinner = (Component) => ({isLoading, ...props}) => {
//     if (!isLoading) {
//         return <Component {...props} />;
//     }
//
//     return <div>Loading...</div>;
// };
const Loading = () => {
    return (<div>Loading...</div>);
};

const withLoadingSpinner = isLoading =>
    branch(
        isLoading,
        renderComponent(Loading)
    );


export default withLoadingSpinner;
