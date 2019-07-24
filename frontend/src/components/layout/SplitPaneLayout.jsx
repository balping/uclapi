import React from 'react';

export default class SplitPaneLayout extends React.Component {

  constructor() props) {
    super(props);
  }

  render() {
    return (
       <div className="row">
	      <div className="one-half column">
	        {props.left}
	      </div>
	      <div className="one-half column">
	        {props.right}
	      </div>
       </div>
    );
  }

}