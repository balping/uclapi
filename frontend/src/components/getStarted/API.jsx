import React from 'react';
import Paper from 'material-ui/Paper';

export default class API extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadow: 1 }

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ shadow: 3 });
  }

  onMouseOut() {
    this.setState({ shadow: 1 });
  }

  render() {
    return (
        <div className="api">
            <Paper
              zDepth={this.state.shadow}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              className="apiPaper"
              >
              <h1><a href={this.props.link}>{this.props.name}</a></h1>
              <p>{this.props.description}</p>
            </Paper>
        </div>
    )
  }

}