Concepts
  actions/action creators
  components
  container
  connect
  provider
  reducer
  store
  dispatch

Actions 
  tells what happend/changed
  payloads (data, or information) 
  your application -> your store(reducer)
  Sample:
  {
    type: ADD_TODO,
    value: 'Build my first Redux app'
  }
Action Creators
  functions that create actions.
  function addTodo(text) {
    return {
      type: ADD_TODO,
      value: 
    }
  }

  const updateMethod = (value) => {
    return {
      type: UPDATE_METHOD,
      method_id: value
    };
  };
  const changeEnabledCallForward = (value) => {
    return {
      type: UPDATE_PARAMS,
      mode: value
    };
  };


Reducers 
  action => state
  map action changes to new state
  update state according to action changes

  The reducer is a pure function that 
  takes the previous state and an action, 
  and returns the next state.

  export default (state=initialState.voicemail, action) => {
    switch (action.type) {
      case UPDATE_PARAMS:
        return Object.assign({}, state, { mode: action.mode });
      case RESET_NUMBER:
        return { ...state, forwardingNumber: '' };    
      default:
        return state;
    }
  };


components/containers
  containers associate/connect components to redux store


Store
  The Store is the object that brings them together. 
  It has the following responsibilities:

  Holds application state;
  Allows access to state via getState();
  Allows state to be updated via dispatch(action);
  Registers listeners via subscribe(listener);
  Handles unregistering of listeners via the function returned by subscribe(listener).

  It's important to note that you'll only have a single store 
  in a Redux application. 
  When you want to split your data handling logic, 
  you'll use reducer composition instead of many stores.

  It's easy to create a store if you have a reducer.
  In the previous section, we used combineReducers() 
  to combine several reducers into one. We will now import it, 
  and pass it to createStore().

