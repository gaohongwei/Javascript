File: webpack.config.js
var config = {
   entry: './main.js',
   output: {
      path:'./',
      filename: 'index.js',
   },
 
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
 
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;

File: index.html
<!DOCTYPE html>
<html lang = "en">
   <head>
      <meta charset = "UTF-8">
      <title>React App</title>
   </head>
   <body>
      <div id = "app"></div>
      <script src = "index.js"></script>
   </body>
</html>

File: App.jsx
import React from 'react';
class ReactApp extends React.Component {
   render() {
      return (
         <div>
            Hello World ReactJS!!!
         </div>
      );
   }
}
export default App;

File: main.js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './App .jsx';

ReactDOM.render(<App />, document.getElementById('app'));
