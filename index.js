const {createStore} = require("redux");

//constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//state
const initailCounterState = {
    count: 0
}

//action creator
const incrementCounter = () => {return{type: INCREMENT}};
const decrementCounter = () => {
    return {type: DECREMENT};
};

//reducer creator
const counterReducer = (state = initailCounterState,action) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count+1
            };
        case DECREMENT:
            return {
                ...state,
                count : state.count-1
            };
    
        default:
            return state;
    }

}

//store creation
const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
})



//acting for the state and data
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounter());