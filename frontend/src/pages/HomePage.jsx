// Standard React imports
import React from 'react';
import ReactDOM from 'react-dom';

// External dependencies
import Collapse, { Panel } from 'rc-collapse';

// Styles
import 'Styles/common/uclapi.scss';

// Legacy
import 'Styles/navbar.scss';

// Images
import heart from 'Images/home-page/heart.svg';
import star from 'Images/home-page/star.svg';
import docs from 'Images/home-page/docs.svg';
import market from 'Images/home-page/market.svg';
import splash_screen from 'Images/home-page/splash_screen.png';
import balloons from 'Images/home-page/balloons.jpg';
import logo from 'Images/home-page/logo.svg';

// Common Components
import { Row, Column, TextView, ButtonView, CardView, ImageView, Demo, NavBar } from 'Layout/Items.jsx';

let endpoints = [
  { name: "/oauth", description: "Let your users sign in with their UCL credentials", link: "/docs#oauth" },
  { name: "/roombookings", description: "Get details of all bookable rooms at UCL", link: "/docs#roombookings"},
  { name: "/search", description: "Find people at UCL", link: "/docs#search"},
  { name: "/timetable", description: "Access personal and module timetables", link: "/docs#timetable"},
  { name: "/resources", description: "Find out how many UCL desktops are free", link: "/docs#resources"},
  { name: "/workspaces", description: "See how busy the libraries are right now", link: "/docs#workspaces"}
];

let linkclass = "alt-text color-transition default-transition";

let FAQ = [
    {
      'question': `What is UCL API?`,
      'answer': (<p>UCL API is a platform for interacting with data that is usually difficult 
      to obtain or hidden in internal UCL systems. The aim is to enable student developers 
      to develop tools for other UCL students to enrich their lives at UCL. Almost every 
      API returns JSON which is simple to parse and interpret in most modern programming languages.</p>)
    },
    {
      'question': `Who is running this?`,
      'answer': (<p>UCL API is a student-built platform, backed and supported by UCL's 
      <a className={linkclass} href="https://www.ucl.ac.uk/isd/"> Information Services Division (ISD) </a> 
      This means that all of the features in UCL API have been developed by students 
      and are aimed at students such as yourself, so jump right in!</p>)
    },
    {
      'question': `Do I need to be from UCL to use the UCL API?`,
      'answer': (<p>You need to be affiliated with UCL because authentication (for both
       developers & end users) is done via the UCL login system.</p>)
    },
    {
      'question': `Do I need to write my apps in a particular programming language?`,
      'answer': (<p>UCL API is a RESTful API hence you can use any language you like. Our
       <a className={linkclass} href='/docs'> docs  </a> currently includes instructions on how to get up
        and running with Javascript, Python and the Unix shell using cURL. However,
         you may use any other programming language so long as it can make HTTP requests.</p>)
    },
    {
      'question': `How do I get involved?`,
      'answer': (<p>UCL API is open source. Our source code is available on
       <a className={linkclass} href="https://github.com/uclapi/uclapi"> a public Github repository</a> 
       for anybody to clone and inspect. Find an bug? Feel free to open an 
       <a className={linkclass} href="https://github.com/uclapi/uclapi/issues"> Issue </a> 
       or even a <a className={linkclass} href="https://github.com/uclapi/uclapi/pulls">
        Pull Request </a> with a proposed fix! We also have annual hiring 
       windows to recruit more students as others graduate, so keep an 
       eye on our social media accounts.</p>)
    },
    {
      'question': `Does this cost anything?`,
      'answer': `UCL API is and always will be completely free to use.`
    },
    {
      'question': `What have other people built?`,
      'answer': (<p>From small Computer Science projects, to running lecture theatre
       central heating systems right up to UCL Assistant, UCL API is being used across
        UCL for many projects public and private. A full list of all (known!) applications
         available to the UCL community can be found at the <a className={linkclass} href="/marketplace">Marketplace.</a></p>)
    },
    {
      'question': `How can I get in touch?`,
      'answer': (<p>If you have any other queries get in touch with us on <a className={linkclass} href="https://www.facebook.com/uclapi/">
       Facebook </a> or <a className={linkclass} href="https://twitter.com/uclapi"> Twitter </a>.  We also
       respond to emails to <a className={linkclass} href="mailto:isd.apiteam@ucl.ac.uk"> isd.apiteam@ucl.ac.uk </a>.</p>)
    },
    {
      'question': `Who owns the Intellectual Property (IP) of what I build?`,
      'answer': (<p>You do! We have no claim on your IP. However, we do request you include
       a shoutout somewhere. This helps raise awareness of UCL API and the vast amount of data available. 
       It may not always be possible to include this attribution in an unintrusive manner (e.g. in a Slack bot), 
       so we're flexible on this. The more people aware of UCL API and who use apps powered by UCL API, the
        better the platform will be. If you have any questions please feel free to reach out!</p>)
    },
];

const questionandanswer = (question, answer) => (
    <Collapse>
          <Panel header={question} showArrow>
            <TextView text={answer} heading={"p"} />
          </Panel>
    </Collapse>
);

class HomePage extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      articles: window.initialData.medium_articles,
      host: window.location.hostname
    };
  }

  render () {
    var iconsize = "150px";
    var now = new Date();

    return (
      <React.Fragment>

        <NavBar isScroll={"true"}/>

        {this.state.host == "staging.ninja" && (
          <Row isPadded = {true} color="warning-red">         
            <Column style="9-10" isCentered={true} >
              <TextView align={"center"} text={"Warning! This is our bleeding-edge staging environment, and therefore performance, accuracy and reliability of the API cannot be guaranteed. For our stable, supported API please go to:"} heading={1} />
              <TextView align={"center"} text={"uclapi.com"} heading = {2} link = {"https://uclapi.com"}/>
            </Column>
          </Row>
        )}

        <Row height = "600px" src={splash_screen}>         
          <Column style="1-1" isCentered={true} isVerticalAlign={true} isCenteredText={true}>
            <TextView text={"UCL API"} heading={1} align={"center"}/>
            <TextView text={"UCL API is a student-built platform for student developers to improve the student experience of everyone at UCL."} heading={2} align={"center"}/>
            <ButtonView inline={true} text={"DASHBOARD"} link={"/dashboard"}/>
            <ButtonView inline={true} text={"DOCS"} link={"/docs"} buttonType={"alternate"}/>
          </Column>
        </Row>

        <Row isPadded = {true} color="dark-grey">         
          <Column style="9-10" isCentered={true} >
            <TextView text={"Our Goals"} heading={1} align={"center"}/>
          </Column>
        </Row>
        <Row isPaddedBottom = {true} color="dark-grey">         
          <Column style="2-3" isCentered={true} isCenteredText={true}>
           <Column style="1-3" isInline={"grid"} isMobileFriendly={true} size={"small"}>
            <TextView text={"Simple Interfaces"} heading={2} align={"center"}/>
            <TextView text={"The endpoints are streamlined to enable any developer to easily pick up and use the api. We hope that developers of all ability"
                           +" find our endpoints and website easy to navigate. We do not want to overcomplicate the process of developing"
                           +" awesome apps, we want to be the easiest part of your development process!"} align={"justify"} heading={5} />
            <ImageView src={star} width={iconsize} height={iconsize} description={"an icon of a love heart"} isCentered={true} />
           </Column>
           <Column style="1-3" isInline={"grid"} isMobileFriendly={true} size={"small"}>
            <TextView text={"Documentation First"} heading={2} align={"center"}/>
            <TextView text={"As developers we feel the pain of bad documentation: this is why we are driven by good documentation. We want you"
                           +" to spend less time worrying about how to use our api and more time thinking about how to revolutionise the student experience."
                           +" With good documentation we allow you to focus on building helpful applications."} align={"justify"} heading={5} />
            <ImageView src={docs} width={iconsize} height={iconsize} description={"an icon of a clipboard"} isCentered={true} />
           </Column>
           <Column style="1-3" isInline={"grid"} isMobileFriendly={true} size={"small"}>
            <TextView text={"Enable Developers"} heading={2} align={"center"}/>
            <TextView text={"We want the api to be so comprehensive that any idea, no matter how big, can be created in order to improve students lives. We are always"
                           +" open to suggestions for new endpoints and functionality so we can enable a greater range of applications to be developed. We"
                           +" cannot wait to see what you will develop!"} align={"justify"} heading={5}/>
            <ImageView src={heart} width={iconsize} height={iconsize} description={"an icon of a star"} isCentered={true} />
           </Column>
          </Column>
        </Row>
        <Row isPaddedBottom = {true} color="dark-grey">         
          <Column style="9-10" isCentered={true} >
            <TextView align={"center"} text={"The UCL API Roadmap is public. Check it out and vote ✅"} align={"center"} heading = {3} link = {"https://trello.com/b/mimLkk3c/ucl-api-roadmap"}/>
          </Column>
        </Row>

        <Row isPadded = {true} color="ucl-orange">         
          <Column style="9-10" isCentered={true} >
            <TextView text={"Get Started using our APIs"} heading={1} align={"center"}/>
          </Column>
        </Row>
        <Row isPaddedBottom = {true} color="ucl-orange">
          <Column style="9-10" widthOverride="auto" isCentered={true} isCenteredText={true}>
            {endpoints.map(x => (
              <CardView  width={"30%"} link={x.link} isMobileFriendly={true} size={"medium"}>
                <Column style="9-10" isCentered={true}>
                  <TextView text={x.name} heading={2} align={"center"}/>
                  <TextView text={x.description} heading={5} align={"center"}/>
                </Column>
              </CardView> ) ) }
          </Column>
        </Row>

        <Demo />

        <Row isPadded={true} color="dark-grey">         
          <Column style="9-10" isCentered={true} isCenteredText={true}>
            <TextView text={"Check out our blog for tutorials"} heading={1} align={"center"}/>
            {this.state.articles.map(x => ( 
              <CardView width={"20%"} size={"small"} link={x.url} cardType={"alternate"} isMobileFriendly={true}>
                <Column style="9-10" isCentered={true}>
                  <TextView text={x.title} align={"center"} heading = {3} color={"black"}/>
                </Column>
              </CardView>
            ) ) }
          </Column>
        </Row>

        <Row src={market} height="600px" img_size="auto 60%" color="ucl-orange">         
          <Column style="1-1" isCentered={true} isCenteredText={true} isVerticalAlign={true}>
            <TextView text={"UCL Marketplace"} heading={1} align={"center"}/>
            <TextView text={"Check out the UCL Marketplace to find apps built using UCL API"} heading={2} align={"center"}/>
            <ButtonView inline={true} text={"UCL MARKETPLACE"} link={"/marketplace"}/>
          </Column>
        </Row>

        <Row isPadded={true} color="dark-grey">         
          <Column style="2-3" isCentered={true} isCenteredText={true}>
            <TextView text={"Frequently Asked Questions"} heading={1} align={"center"}/>
            {FAQ.map(x => ( 
              questionandanswer(x.question, x.answer)
            ) ) }
          </Column>
        </Row>

        <Row isPadded = {true} src={balloons}>         
          <Column style="1-2" isCentered={true} isCenteredText={true}>
              <TextView text={"UCL API"} heading={1} align={"center"}/>

              <TextView text={"github "} heading={5} align={"center"} isInline={true} link={"https://github.com/uclapi/uclapi"}/>
              <TextView text={`-`} heading={5} align={"center"} isInline={true} />
              <TextView text={" twitter"} heading={5} align={"center"} isInline={true} link={"https://twitter.com/uclapi?lang=en"}/>
              <TextView text={`-`} heading={5} align={"center"} isInline={true}/>
              <TextView text={" facebook"} heading={5} align={"center"} isInline={true} link={"https://www.facebook.com/uclapi/"}/>

              <ImageView src={logo} width={iconsize} height={iconsize} description={"ucl api logo"} isCentered={true} />
          </Column>
        </Row>

      </React.Fragment>
    );
  }

}

ReactDOM.render(
  <HomePage />,
  document.querySelector('.app')
);