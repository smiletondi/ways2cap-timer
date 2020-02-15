import React, { Component } from 'react';

import './App.css';

import CountdownHeader from './components/CountdownHeader/CountdownHeader';
import CountdownBody from './components/CountdownBody/CountdownBody';
import CountdownFooter from './components/CountdownFooter/CountdownFooter';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      remainingTime: 0,
      play: false,
      speed: 1,
    };
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      switch (this.state.play) {
        case true:
          this.handleStart();
          return;
        default:
          return;
      }
    }
  }

  changeSpeed = (speed) => {
    this.setState({
      speed
    });
  }

  handleCountdown = (seconds) => {
    if (this.state.play) {
      return 0;
    }
    this.setState({
      time: seconds,
      remainingTime: seconds,
    });
  }

  handleStart = () => {
    this.timer = setInterval(() => {
      let newCount = this.state.remainingTime - 1*this.state.speed;
      this.setState(
        {
          remainingTime: newCount >= 0 ? newCount : 0,
          play: true
        }
      );
    }, 1005);
  }

  handleStop = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState(
        { play: false }
      );
    }
  }

  handleReset = () => {
    this.setState(
      {
        remainingTime: 0,
        play: false
      }
    );
  }

  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  };


  render() {
    return (
      <div className="App container-fluid">
        <div className="container">
          <div className="countdown container">
            <CountdownHeader
              handleCountdown={this.handleCountdown}
              handleStart={this.handleStart}
              handleReset={this.handleReset}
            />
            <CountdownBody
              handleStop={this.handleStop}
              play={this.state.play}
              time={this.state.time}
              remainingTime={this.state.remainingTime}
              handleStart={this.handleStart}
              formatTime={this.format(this.state.remainingTime)}
            />
            <CountdownFooter
              changeSpeed={this.changeSpeed} />
          </div>
        </div >
      </div>
    )
  }
}

export default App;