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
  
1. Basic
  Components
    Listen to the user and server events and send them to JS functions.
    Render DOM based on some data.
    has event handler 
  Actions:
    json object for event
    Sample:
      {"type": "FETCH_POST", "id": 1234} // <-- Action
  Event:
    In Redux, events are represented as a JSON object called "Actions".
    {"type": "FETCH_POST", "id": 1234} // <-- Action

  Action Creators:
    functions creating Actions
     tells what happend/changed with payloads (data, or information) 
    function fetchPost(id) {
      return {
         type: FETCH_POST,
         result: makeServerRequest("http://postsServer.com/api/id")
       };
    }

    const onChange = (value) => {
      return {
        type: 'SELECT_CHANGE',
        mode: value
      };
    };

2. Reducers 
  The reducer is a pure function that 
    has parameters
      the previous state
      an action (event type anf payload)
    return next state.
    apply action to the current state and
  function(state, action){
    return {Object.assign({}, state, {})}
  }
  
  your change -> your store(reducer)
  action => state
  map action changes to new state
  update state according to action changes

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

3. Dispatching an Action
  Redux provides a function called "dispatch"
  Just means firing the event defined by the arguments
  Dispatching an Action means simply calling the dispatch function w/ the action JSON object.
  Sample:
    Call the "Action Creator" w/ post id and
    then use its returned value (Action JSON object) to finally dispatch it to "reducers"
    dispatch(fetchPost(id)) or
    dispatch({type:"FETCH_POST", id:1234})

4. Container
  containers associate/connect components to redux store
    mapStateToProps
    mapDispatchToProps
  connect(mapStateToProps, mapDispatchToProps)(MyComponent)

5. store and provider
  create store from reducer
  provide store to the container
  
  const store = createStore(todoApp,{})
  // Provider is given the store as a prop
  render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('app-node'))
  
  React component coming with “react-redux” library. 
  provide the store to its child components.
  makes the store accessible to it’s children

  Usually put our react components within Provider.
6. Connect
  connect our components to redux store
  retrieve data by obtaining its current state, or 
  change its state by dispatching an action 
  mapStateToProps
  mapDispatchToProps
  
7. Store
  created from reducer
  reducers is only way to  modify the store  
  
  Storage for state
  no way to directly modify the store

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
