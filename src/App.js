import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        {/* <h3 className="countdown-title">Countdown Timer</h3> */}
        <div className="countdown">
          <div className="countdown-header">
            <div className="countdown-form">
              <form className="form-inline">
                <div className="form-group">
                  <h5 className="font-weight-bold count">Countdown: </h5>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="(Min)"
                    min="1"
                  />
                </div>
                <div className="btn btn-form-start"> START </div>
                {/* <div className="btn btn-form-reset"> RESET </div> */}
              </form>
              {/* <p className="form-error">
                <span >error</span>
              </p> */}
            </div>
          </div>
          <div className="countdown-body">
            <div className="countdown-body">
              <h3 className="countdown-total">
                <span className="minutes">15</span>
                <span className="separator">:</span>
                <span className="seconds"> 31 </span>
              </h3>
            </div>
            <div className="countdown-stop-button">
              <div className="btn btn-stop">
                <i className="fa fa-pause"></i>
              </div>
              <div className="btn btn-start">
                <i className="fa fa-play"></i>
              </div>
            </div>
          </div>

        </div>
      </div >
    </div >
  );
}

export default App;
