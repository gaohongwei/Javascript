class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/user'>Roster</Link></li>
              <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/user' component={User}/>
            <Route path={"/user/:id"} component={User} />
            <Route path='/schedule' component={User}/>
          </Switch>
        </div>
      </BrowserRouter>
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

const AppVersion2 = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/user' component={User}/>
        <Route path='/schedule' component={User}/>
      </Switch>
    </div>
  </BrowserRouter>
)

class AppVersion1 extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/user' component={User}/>
            <Route path='/schedule' component={User}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
