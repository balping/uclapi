import React from 'react';
import update from 'immutability-helper';
import 'whatwg-fetch';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false
    };
    this.changeName = this.changeName.bind(this);
    this.editName = this.editName.bind(this);
    this.regenToken = this.regenToken.bind(this);
    this.regenConfirm = this.regenConfirm.bind(this);
  }

  changeName(e){
    e.preventDefault();
    let that = this;
    fetch('/dashboard/api/rename', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'new_name=' + this.refs.name.value +
        'app_id=' + this.props.appId
    }).then((res)=>{
      if(res.ok){
        return res.json();
      } else {
        throw new Error('An error occured');
      }
    }).then((json)=>{
      if(json.success){
        let newApp = {
          name: that.refs.name.value,
          id: that.props.appId,
          token: that.props.appKey,
          created: that.props.created,
          updated: json.date
        };
        that.props.update(that.props.name, newApp);
        that.refs.name.value = '';
        that.setState({
          editing: false
        });
      }else{
        throw new Error(json.message);
      }
    }).catch((err)=>{
      console.error(err);
    });
  }

  regenToken(){
    let that = this;
    fetch('/dashboard/api/regen', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'app_id=' + this.props.appId
    }).then((res)=>{
      if(res.ok){
        return res.json();
      } else {
        throw new Error('An error occured');
      }
    }).then((json)=>{
      if(json.success){
        let newApp = {
          name: that.props.name,
          id: that.props.appId,
          token: json.token,
          created: that.props.created,
          updated: json.date
        };
        that.props.update(that.props.name, newApp);
      }else{
        throw new Error(json.message);
      }
    }).catch((err)=>{
      console.error(err);
    });
  }

  regenConfirm(e){
    e.preventDefault();
    if(confirm('Are you sure you want to regenerate your api token?')){
      this.regenToken();
    }
  }

  editName(e){
    e.preventDefault();
    this.setState({
      editing: true
    });
  }

  render () {
    return <div className="app pure-u-1 pure-u-xl-1-2">
      <div className="card">
        {this.state.editing ? (
          <form className="pure-form" onSubmit={this.changeName}>
            <fieldset>
              <input type="text" placeholder={this.props.name} ref="name"/>
              <button type="submit" className="pure-button pure-button-primary" onClick={this.changeName}>Submit</button>
            </fieldset>
          </form> 
        ):(
          <div className="pure-g">
            <div className="pure-u-1-2">
              <h2>{this.props.name}</h2>
            </div>
            <div className="pure-u-1-2">
              <button className="pure-button pure-button-primary" onClick={this.editName}>Edit</button>
            </div>
          </div>
        )}
        <div className="pure-g">
          <div className="pure-u-1-2">
            <p>API Token: </p>
            <form className="pure-form">
              <input type="text" value={this.props.appKey} readOnly/>
            </form>
          </div>
          <div className="pure-u-1-2">
            <button className="pure-button pure-button-primary" onClick={this.regenConfirm}>Regenerate</button>
          </div>
        </div>
        <p>Created: {this.props.created}</p>
        </div>
    </div>;
  }
}

App.propTypes = {
  name: React.PropTypes.string.isRequired,
  appId: React.PropTypes.string.isRequired,
  appKey: React.PropTypes.string.isRequired,
  created: React.PropTypes.string.isRequired,
  updated: React.PropTypes.string.isRequired,
  update: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired
};

class AppForm extends React.Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e){
    e.preventDefault();
    let that = this;
    fetch('/dashboard/api/create', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'name=' + this.refs.name.value
    }).then((res)=>{
      if(res.ok){
        return res.json();
      } else {
        throw new Error('An error occured');
      }
    }).then((json)=>{
      if(json.success){
        let newApp = json.app;
        newApp['name'] = that.refs.name.value;
        that.refs.name.value = '';
        that.props.add(newApp);
      }
    }).catch((err)=>{
      console.error(err);
    });
  }
  render () {
    return <div className="appForm card pure-u-1">
      <h2>Create App</h2>
      <form className="pure-form pure-form-stacked" onSubmit={this.submitForm}>
        <fieldset>
          <div className="pure-g">
            <div className="pure-u-1">
              <label htmlFor="name">App Name</label>
              <input id="name" ref="name" className="pure-u-1" type="text"/>
            </div>
          </div>
          <div className="pure-g">
            <div className="pure-u-1-24"></div>
            <button type="submit" className="pure-button pure-button-primary pure-u-10-24">Submit</button>
            <div className="pure-u-2-24"></div>
            <button className="pure-button button-error pure-u-10-24">Cancel</button>
            <div className="pure-u-1-24>"></div>
          </div>
        </fieldset>
      </form>
    </div>;
  }
}

AppForm.propTypes = {
  add: React.PropTypes.func.isRequired
};

class AppList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      apps: props.apps,
      showCreate: false
    };
    this.addApp = this.addApp.bind(this);
    this.updateApp = this.updateApp.bind(this);
    this.getAppIndex = this.getAppIndex.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.deleteApp = this.deleteApp.bind(this);
  }

  addApp(app){
    this.setState( (state) => 
      update(state, {apps: {$push: [app]}})
    );
  }

  updateApp(name, app){
    this.setState( (state) => {
      let appIndex = this.getAppIndex(name);
      if(appIndex !== undefined){
        return update(state, {apps: {[appIndex]: {$set: app}}});          
      }
    });
  }

  deleteApp(appName){
    this.setState((state) => {
      let appIndex = this.getAppIndex(appName);
      if(appIndex !== undefined){
        return update(state, {apps: {$splice: [[appIndex, 1]]}});
      }
    });
  }

  getAppIndex(appName){
    for(let app of this.state.apps){
      if(app.name === appName){
        return this.state.apps.indexOf(app);
      }
    }
  }

  clickHandler(e){
    e.preventDefault();
    this.deleteApp('My Cool App');
  }

  render () {
    return <div className="appList pure-u-1">
      <div className="pure-g">
        {this.state.apps.map((app, i) => {
          return <App name={app.name}
            appId={app.id}
            appKey={app.token}
            created={app.created}
            updated={app.updated}
            key={i}
            update={this.updateApp}
            remove={this.deleteApp}
          />;
        })}
        <AppForm add={this.addApp}/>
      </div>
    </div>;
  }
}

AppList.propTypes = {
  apps: React.PropTypes.array.isRequired
};

export default AppList;
