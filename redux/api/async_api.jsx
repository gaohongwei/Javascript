Create store
  import { createStore, applyMiddleware } from "redux";
  import thunk from "redux-thunk";

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  
// actions  
productActions.js
  export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
  export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
  export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

  export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });

  export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
  });

  export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });
  
// reducer
rootReducer.js
  import { combineReducers } from "redux";
  import products from "./productReducer";

  export default combineReducers({
    products
  });
  
productReducer.js
  import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from './productActions';

  const initialState = {
    items: [],
    loading: false,
    error: null
  };

  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };

      case FETCH_PRODUCTS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.payload.products
        };

      case FETCH_PRODUCTS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the items around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }
  
  // Components
  ProductList.js
  import React from "react";
  import { connect } from "react-redux";
  import { fetchProducts } from "/productActions";

  class ProductList extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchProducts());
    }

    render() {
      const { error, loading, products } = this.props;

      if (error) {
        return <div>Error! {error.message}</div>;
      }

      if (loading) {
        return <div>Loading...</div>;
      }

      return (
        <ul>
          {products.map(product =>
            <li key={product.id}>{product.name}</li>
          )}
        </ul>
      );
    }
  }

  const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
  });

  export default connect(mapStateToProps)(ProductList);
