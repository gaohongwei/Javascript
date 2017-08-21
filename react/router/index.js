// This works with a new project
// All code is included
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class User extends React.Component {
    render() {
        return (
            <div>
                <h3>User</h3>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/user'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/user' component={User}/>
      <Route path='/schedule' component={User}/>
    </Switch>
  </main>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
