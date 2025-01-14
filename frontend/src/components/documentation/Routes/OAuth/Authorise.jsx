import React from 'react';

import Topic from './../../Topic.jsx';
import Table from './../../Table.jsx';
import Cell from './../../Cell.jsx';


let codeExamples = {
  python: `import requests

params = {
  "client_id": "123.456",
  "state": "1",
}
r = requests.get("https://uclapi.com/oauth/authorise", params=params)
print(r.json())`,

  shell: `curl -G https://uclapi.com/oauth/authorise/ \
-d client_id=123.456 \
-d state=1`,

  javascript: `fetch("https://uclapi.com/oauth/authorise/?client_id=123.456&state=1")
.then((response) => {
  return response.json()
})
.then((json) => {
  console.log(json);
})`
}


export default class Authorise extends React.Component {

    render () {
      return (
        <div>
          <Topic
            activeLanguage={this.props.activeLanguage}
            codeExamples={codeExamples}>
            <h1 id="oauth/authorise">Authorise</h1>
            <p>
              Endpoint: <code>https://uclapi.com/oauth/authorise</code>
            </p>

            <Table
              name="Query Parameters">
              <Cell
                name="client_id"
                requirement="required"
                example="123.456"
                description="Client ID of the authenticating app." />
              <Cell
                name="state"
                requirement="required"
                example="1"
                description="OAuth state." />
            </Table>
          </Topic>

          <Topic
            noExamples={true}>
            <h2>Response</h2>
            <p>
              Redirection to authorise page.
            </p>
          </Topic>

          <Topic
            noExamples={true}>
            <Table
              name="Errors">
              <Cell
                name="Incorrect parameters supplied."
                description="Gets returned when you have not supplied a client_id and a state in your request." />
              <Cell
                name="App does not exist for client id."
                description="Gets returned when you supply an invalid client_id." />
              <Cell
                name="No callback URL set for this app."
                description="Gets returned when you have not set a callback URL for your app." />
              <Cell
                name="UCL has sent incomplete headers"
                description="Gets returned when UCL sends us incomplete headers. If the issues persist please contact the UCL API Team to rectify this." />
              </Table>
          </Topic>
        </div>
      )
    }

}
