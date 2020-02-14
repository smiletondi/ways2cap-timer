import React, { Component } from 'react';

import './App.css';

import CountdownHeader from './components/CountdownHeader/CountdownHeader';
import CountdownBody from './components/CountdownBody/CountdownBody';
import CountdownFooter from './components/CountdownFooter/CountdownFooter';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <div className="countdown">
            <CountdownHeader />
            <CountdownBody />
            <CountdownFooter />
          </div>
        </div >
      </div>
    )
  }
}

export default App;