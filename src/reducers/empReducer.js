const initialState = {
    emp: {}
};

const empReducer =(state=initialState,action) => {
    switch(action.type) {
        case 'FETCH-EMPLOYEE':
            return {
                ...state,
                emp: action.payload
            }
        default:
            return state;
    }
}

export default empReducer;