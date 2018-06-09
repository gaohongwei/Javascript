Let   define a variable in block level
const define a variable in block level
var   define a variable in fun level

for (var i = 0; i < 5; i++) {
  setTimeout( ((x) => () => console.log(x))(i), i * 1000 );
}

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
