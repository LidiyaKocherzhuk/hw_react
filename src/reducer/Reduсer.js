const Reducer = (state, action) => {

    switch (action.type) {

        case 'addCat':
            return {
                ...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload}]
            };
        case 'addDog':
            return {
                ...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload}]
            };
        case 'deleteCat':
            return {
                ...state, cats: state.cats.filter(cat => cat.id !== action.id)
            };

        case 'deleteDog':
            return {
                ...state, dogs: state.dogs.filter(dog => dog.id !== action.id)
            };

        default:
            return state;
    }

};

export {Reducer};