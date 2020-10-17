useState

  import React, { Fragment, useEffect, useState } from 'react';
  const [count, setCount] = useState(0);


  It declares a state variable called count, and set it to 0.

  React will remember its current value between re-renders,

  If we want to update the current count, we can call setCount.



useState
const [state, setState] = useState(initialState);

During the initial render, the returned state (state) is
the same as the value passed as the first argument (initialState).

setState accepts a new state value and enqueues a re-render of the component.

setState(newState);
During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.


Functional updates
If the new state is computed using the previous state,
you can pass a function to setState.
The function will receive the previous value, and return an updated value.


If your update function returns the exact same value as the current state, the subsequent rerender will be skipped completely.

Unlike the setState method found in class components,
useState does not automatically merge update objects.


Lazy initial state
The initialState argument is the state used
during the initial render. In subsequent renders, it is disregarded.
If the initial state is the result of an expensive computation, you may provide a function instead,
which will be executed only on the initial render:

Bailing out of a state update
If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)

Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree. If you’re doing expensive calculations while rendering, you can optimize them with useMemo.

