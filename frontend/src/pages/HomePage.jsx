import React from 'react';
import ReactDOM from 'react-dom';

// Base Styles
import './../sass/skeleton-styles/agreement.scss';
import './../sass/skeleton-styles/skeleton.scss';
import './../sass/skeleton-styles/uclapi.scss';

// NEED TO REFACTOR THIS STYLE
import './../sass/navbar.scss';

// Layout components
import FullScreenLayout from '../components/layout/containers/FullScreenLayout.jsx';
import SplitPaneLayout from '../components/layout/containers/SplitPaneLayout.jsx';
import ImageContent from '../components/layout/content/ImageContent.jsx';
import TextContent from '../components/layout/content/TextContent.jsx';
import CustomButton from '../components/layout/content/CustomButton.jsx';
import NavBar from '../components/layout/navigation/NavBar.jsx'

// Images
import computer_image from '../images/home-page/worker.svg';

class HomePage extends React.Component {

  render () {
    return (
        <div className="index">
          <NavBar isScroll={false} />
          <SplitPaneLayout
            isFullScreen={true}
            left={
              <div className="uclapi-introduction full-screen center-y">
                <TextContent title="We can help you to build amazing applications for other students"
                             text="To get more information about how to use the API or to discover more 
                                   the project: click the links below!"
                             isVerticalAlign={false}
                             isHorizontalAlign={false}
                             isFullScreen={false} />
                <div className="social-links">
                  <CustomButton link="" text="docs" isMarginRight={true}/>
                  <CustomButton link="" text="slack" isMarginRight={false}/>
                </div>
              </div>
            }
            right={
              <ImageContent src={computer_image} 
                            isVerticalAlign={true}
                            isHorizontalAlign={true}
                            isFullScreen={true} />
            } 
          />
        </div>
    );
  }

}

ReactDOM.render(
  <HomePage />,
  document.querySelector('.app')
);