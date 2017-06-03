import React from 'react';

import AppBar from 'material-ui/AppBar';
import { getStyles } from 'material-ui/AppBar/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionMenu from 'material-ui/svg-icons/navigation/menu';


export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};

    this.resize = this.resize.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  resize() {
    console.log(window.innerWidth);
    this.forceUpdate()
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  static get contextTypes() {
    return { muiTheme: React.PropTypes.object.isRequired };
  }

  render() {
    const Logo = (
      <img
        src={window.staticURL + 'simpleAPILogoWhite.svg'}
      />
    )

    const styles = getStyles(this.props, this.context);

    let rightButtons = (
      <div>
        <a href={"/"}>
          <FlatButton label="Get Started" className="active" style={styles.flatButton} />
        </a>
        <a href={"/dashboard"}>
          <FlatButton label="Dashboard" style={styles.flatButton} />
        </a>
        <a href={"/docs"}>
          <FlatButton label="Documentation" style={styles.flatButton} />
        </a>
        <a href={"/login"}>
          <RaisedButton label="Login" style={styles.raisedButton} />
        </a>
      </div>
    )

    if (window.innerWidth < 700) {
      rightButtons = (
        <div>
          <IconButton>
            <ActionMenu style={styles.iconButton} onTouchTap={this.handleToggle} />
          </IconButton>
          <Drawer open={this.state.open} openSecondary={true} docked={false}>
            <a href={"/"}>
              <MenuItem onTouchTap={this.handleToggle}>Get Started</MenuItem>
            </a>
            <a href={"/dashboard"}>
              <MenuItem onTouchTap={this.handleToggle}>Dashboard</MenuItem>
            </a>
            <a href={"/docs"}>
              <MenuItem onTouchTap={this.handleToggle}>Documentation</MenuItem>
            </a>
            <a href={"/login"}>
              <MenuItem onTouchTap={this.handleToggle}>Login</MenuItem>
            </a>
          </Drawer>
        </div>
      )
    }

    return (
      <AppBar
        className="navbar"
        title="UCL API"
        iconElementLeft={Logo}
        iconElementRight={rightButtons} />
    );
  }

}
