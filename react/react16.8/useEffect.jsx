useEffect
  Add in React 16.8
  Allow to access state etc without wertting class
  only used in functional component
  Called when component is rendered
  Similar to DidMount


  Only use it in top level,
  Dont use it in conditions, loops

  The second param
    Call useEffect only if the second param changes
    []; only call it on once


  useEffect(() => {
    console.log('called')
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    console.log('called')
    window.scrollTo(0, 0);
  }, []);
