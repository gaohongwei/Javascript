mapDispatchToProps for Connect call
Dispatching Approaches

connect with a mapDispatchToProps Parameter
  specify actions to dispatch as props
  Usage:
      props.dispatch(() => increment())
      props.increment()
      <div>
        <button onClick={props.decrement}>-</button>
        <span>{count}</span>
        <button onClick={props.increment}>+</button>
        <button onClick={props.reset}>reset</button>
      </div>

  Object format, connect with mapDispatchToProps
    import {increment, decrement, reset} from "./counterActions";

    const actionCreators = {
      increment,
      decrement,
      reset
    }

    export default connect(mapState, actionCreators)(Counter);

    Assume each an action creator
    Your component will no longer receive dispatch as a prop

    // React Redux does this for you automatically:
    dispatch => bindActionCreators(mapDispatchToProps, dispatch)

  Function format:
    const mapDispatchToProps = dispatch => {
      return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' })

        // dispatching actions returned by action creators
        // convention: the field keys have same name as the action creator:
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())

        // explicitly forwarding arguments
        onClick: event => dispatch(trackClick(event)),

        // implicitly forwarding arguments
        onReceiveImpressions: (...impressions) =>
          dispatch(trackImpressions(impressions))
      }
    }

    //  action creators
    const increment = () => ({ type: 'INCREMENT' })
    const decrement = () => ({ type: 'DECREMENT' })
    const reset = () => ({ type: 'RESET' })

  bindActionCreators:
    simplify above steps
    turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly

    Sample:
    import { bindActionCreators } from 'redux'

    const increment = () => ({ type: 'INCREMENT' })
    const decrement = () => ({ type: 'DECREMENT' })
    const reset = () => ({ type: 'RESET' })

    // binding an action creator
    // returns (...args) => dispatch(increment(...args))
    const boundIncrement = bindActionCreators(increment, dispatch)

    // binding 3 creators
    // binding an object full of action creators
    const boundActionCreators = bindActionCreators(
      { increment, decrement, reset },
      dispatch
    )
    // returns
    // {
    //   increment: (...args) => dispatch(increment(...args)),
    //   decrement: (...args) => dispatch(decrement(...args)),
    //   reset: (...args) => dispatch(reset(...args)),
    // }

    function mapDispatchToProps(dispatch) {
      return bindActionCreators({ increment, decrement, reset }, dispatch)
    }

    // component receives props.increment, props.decrement, props.reset
    connect(
      null,
      mapDispatchToProps
    )(Counter)

connect without mapDispatchToProps
  Default: dispatch as a Prop
  connect(mapStateToProps /** no second argument */)(MyComponent)
  <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>reset</button>
  <button onClick={() => props.dispatch( increment())}>reset</button>
