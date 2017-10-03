const authMiddleware = store => next => action => {
    if(action.authNeeded) {
        //const headers = new Headers();
        // add authorization token to headers if it exists and didn't expire
        //headers.append("Authorization", "Bearer token");

        const actionWrapper = (config) => {
            return Object.assign({}, action, config)
        };

        return next(actionWrapper({ headers: {"Authorization": "Bearer token"} }));
    }

    return next(action);
};

export default authMiddleware;
