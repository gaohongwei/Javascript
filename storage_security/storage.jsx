cookies:
  data can be read be server
  used for authentication

localStorage
  good for public information
  not for private
  
localStorage and sessionStorage
  up to 10Mb
  saved locally only
  same API
  k/v pairs
  localStorage exists unless user clear it
  sessionStorage disapper when window are closed
    For user access token


localStorage:
  Usage:
    // setter or create
    localStorage.setItem('myData', data);

    // getter
    localStorage.getItem('myData');

    // remove
    localStorage.removeItem('myData');

    // remove all
    localStorage.clear();
  Set/get object
    //JSON.stringify, JSON.parse
    // Create item:
    let myObj = { name: 'Skip', breed: 'Labrador' };
    //JSON.stringify, JSON.parse
    localStorage.setItem(key, JSON.stringify(myObj));

Clearing Everything
  Checking for Support
  Test for localStorage support by checking if it’s available on the window object:

  if (window.localStorage) {
    // localStorage supported
  }

  localStorage.clear();


  if (localStorage.length > 0) {
    // We have items
  } else {
    // No items
  }

  for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(key, value);
  }


Sample:
  const initialState = [
    {id:1,name:'John Doe',grade:1,school:'React Redux School'},
    {id:2,name:'Jane Doe',grade:2,school:'React Redux School'},
    {id:3,name:'Terry Adams',grade:3,school:'React Redux School'},
    {id:4,name:'Jenny Smith',grade:4,school:'React Redux School'}
  ];

  if( localStorage.getItem("students") === null)
    localStorage.setItem('students',JSON.stringify(initialState));
  else
    initialState = JSON.parse(localStorage.getItem('students'));
