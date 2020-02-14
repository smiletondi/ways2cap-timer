import React, { Component } from 'react'

import './CountdownBody.css';

export class CountdownBody extends Component {
    render() {
        return (
            <div className="countdown-body">
                <h5 className="font-weight-bolder my-3">More than halfway there!</h5>
                <div className="countdown-body">
                    <h3 className="countdown-total">
                        <span className="minutes">15</span>
                        <span className="separator">:</span>
                        <span className="seconds"> 31 </span>
                    </h3>
                    <div className="countdown-play">
                        <div className="btn btn-stop">
                            <i className="fa fa-pause"></i>
                        </div>
                        <div className="btn btn-start">
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountdownBody;
