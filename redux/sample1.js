import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import { createStore } from 'redux';

const initialState = () => {
  return {
    search: 'ruby',
    language: 'ruby',
    page: 0, 
    count: 0,
    rows: []
  }
}

const reducer = function(state=initialState(), action){
  //let state = 1;
  switch(action.type){
    case 'SEARCH':
      state = Object.assign(state, {search: action.payload} );
      break;
    case 'LANGUAGE':
      state = Object.assign(state, {language: action.payload} );
      break; 
    case 'PAGE':
      state = Object.assign(state, {page: action.payload} );
      break;
  }
  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('state changed to:', store.getState())
})

let changed = {type: 'SEARCH', payload: 'new search'}
store.dispatch(changed);

changed = {type: 'LANGUAGE', payload: 'shell'}
store.dispatch(changed);

changed = {type: 'PAGE', payload: 2}
store.dispatch(changed);
