
const Reducer = (state,action) => {

    switch (action.type) {
        case 'addCat':
            return {...state, cats:[...state.cats, {id: new Date().getTime(),name: action.payload}]};
        case 'addDog':
            return {...state, dogs:[...state.dogs, {id: new Date().getTime(), name: action.payload}]};
        default:
            return state;
    }

};

export {Reducer};