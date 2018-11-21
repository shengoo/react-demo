
const initialState = 0;


export default (state = initialState,action) => {
  console.log(action)
    switch (action.type){
        case 'INCREMENT':{
          return state + 1;
        }
        case 'INCREMENT_ASYNC': {
          return state;
        }
        case 'INCREMENT_IF_ODD':
          return (state % 2 !== 0) ? state + 1 : state
        case 'DECREMENT':
          return state - 1
        default:
            return state;
    }
}
