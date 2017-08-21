
<Switch>
  <Route exact path='/' component={Instance}/>
  <Route path={"/resources/:resource_type/:resource_id"} component={Resource} />
  <Route path={"/resources/:resource_type"} component={Resources} />
</Switch>

 this.props.match.params.resource_type;
 this.props.match.params.resource_id;

window.location = '/topics/this_name';
