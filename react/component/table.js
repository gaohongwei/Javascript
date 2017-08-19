  class ShowAsTable extends React.Component {
    constructor(props) {
      super(props);
    }
    render () {
      var data = this.props.data;
      var keys = this.props.keys;
      if (data == null) return null;
      return (
        <div>
          <table className="table table-inverse">
          <thead>
          <tr>
          {keys.map((key,index) => (
            <th key={index}>{key}</th>
          ))}
          </tr>
          </thead>
          <tbody>
            { data.map((row, index) => (
              <tr key = {index}  >
              {keys.map((col,index) => (
                <td key={col}>{row[col]}</td>
              ))}
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      );
    }
  }
