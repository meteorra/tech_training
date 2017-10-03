export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(err) {
        return undefined;
    }
};

export const saveState = (key, val) => {
    try {
        const serializedState = JSON.stringify(val);
        localStorage.setItem(key, serializedState);
    } catch(err) {
    }
};
