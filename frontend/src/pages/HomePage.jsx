import React from 'react';
import ReactDOM from 'react-dom';

// Base Styles
import './../sass/skeleton-styles/agreement.scss';
import './../sass/skeleton-styles/skeleton.scss';

// Layout components
import FullScreenLayout from '../components/layout/FullScreenLayout.jsx';
import SplitPaneLayout from '../components/layout/SplitPaneLayout.jsx';

class HomePage extends React.Component {

  render () {
    return (
      <FullScreenLayout src="">
       <SplitPaneLayout
        left={
          "hello to the left"
        }
        right={
          "hello to the right"
        } />
      </FullScreenLayout>
    );
  }

}

ReactDOM.render(
  <HomePage />,
  document.querySelector('.app')
);