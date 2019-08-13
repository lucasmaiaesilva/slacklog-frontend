import React, { Fragment } from 'react';
import Fetch from './Fetch';
import Card from './Card';
import './App.css';

function Logs({ eventName, data }) {
  if (data.length === 0) {
    return (
      <Fragment>
        <h2>{ eventName }</h2>
        <p>empty data</p>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h2>{ eventName }</h2>
      {data.map(log => (
        <Card
          key={log._id}
          eventName={log.event.type}
          updated={log.event.user.updated}
          name={log.event.user.real_name}
          tzLabel={log.event.user.tz_label}
          isAdmin={log.event.user.is_admin}
          avatarImage={log.event.user.profile.image_72}
        />
      ))}
    </Fragment>
  ); 
}

function App() {

  const configFetch = {
    method: 'GET',
    headers: {}
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Logs List</h1>
      </header>
      <Fetch 
        url="https://aqueous-stream-50958.herokuapp.com/logs"
        configdata={configFetch}
        render={(logs) => (
          <Fragment>
            <Logs
              eventName="user change"
              data={logs[0].data}
            />
            <Logs
              eventName="team join"
              data={logs[1].data}
            />
          </Fragment>      
        )}
      />
    </div>
  );
}

export default App;
