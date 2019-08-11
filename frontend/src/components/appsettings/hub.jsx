import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from 'Layout/Items.jsx';

class Hub extends React.Component {
  render () {
    return <React.Fragment>
      <NavBar isScroll={false} />
      {this.props.children}
    </React.Fragment>;
  }
}

Hub.propTypes = {
  children: PropTypes.node
};

export default Hub;