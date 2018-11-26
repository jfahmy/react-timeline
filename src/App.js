import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

const eventComponents = () => {
  return <Timeline
      events={timelineData["events"]}
    />
};

class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        {eventComponents() }
        </main>
      </div>
    );
  }
}

export default App;
