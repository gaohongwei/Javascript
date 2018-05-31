# https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
Concepts
  Redux 
  react-redux 
  actions/action creators
  components
  container
  connect
  provider
  reducer
  store
  dispatch

Redux 
  state management

react-redux 
  integrate redux’s state management into a React application
  
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

Provider 
  React component coming with “react-redux” library. 
  provide the store to its child components.
  makes the store accessible to it’s children

  Usually put our react components within Provider.

  const store = createStore(todoApp,{})
  // Provider is given the store as a prop
  render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('app-node'))

Connect
  connect our components to redux store
  retrieve data by obtaining its current state, or 
  change its state by dispatching an action 
  mapStateToProps
  mapDispatchToProps
  
Store
  Storage for state
  no way to directly modify the store
  reducers is only way to  modify the store
  To change data, we need to dispatch an action

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

