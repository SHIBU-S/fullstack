
// function counterReducer(state=0,action){
//     switch(action.type)
//     {
//         case "INCREMENT":
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// export default  counterReducer;







// const initialState = {
//     name: '',
//     age: ''
// };

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_NAME':
//             return { ...state, name: action.payload };
//         case 'SET_AGE':
//             return { ...state, age: action.payload };
//         default:
//             return state;
//     }
// };

// export default userReducer;






const initialState = { name : "" , username : "" , deletes : "" , users : [] }

function userReducer(state = initialState,action){
    switch(action.type){
        case "SET_EMAIL":
            return {...state , name : action.Value }
        case "SET_USERNAME":
            return {...state , username : action.Value }
        case "SET_DELETE":
            return {...state , deletes : action.Value }
        case 'SET_USERS': 
            return { ...state, users: action.payload };
        default:
            return state;
    }
}

export default userReducer;