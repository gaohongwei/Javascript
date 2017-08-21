
<Route path="/topics/:name" component={Topic} />

export default function Topic(props) {
  return <h1>{props.match.params.name}</h1>
}

window.location = '/topics/this_name';
