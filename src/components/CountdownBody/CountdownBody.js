import React from 'react';

import './CountdownBody.css';

function CountdownBody(props) {

    const { time, remainingTime, play } = props;
    let msg;
    if (remainingTime < time / 2) {
        msg = "More than halfway there!";
    }
    if (remainingTime === 0) {
        msg = "Time’s up!";
    }
    console.log(msg)


    return (
        <div className="countdown-body">
            <h5
                className={
                    (remainingTime < 10) ? "font-weight-bolder my-3 text-danger blink"
                        : remainingTime < 20 ? "font-weight-bolder my-3 text-danger"
                            : "font-weight-bolder my-3"
                }>{msg}</h5>

            <div className="countdown-body">
                <h3 className="countdown-total">
                    {props.formatTime}
                </h3>
                <div className="countdown-play">
                    {
                        play ?
                            (<div className="btn btn-stop" onClick={props.handleStop}>
                                <i className="fa fa-pause"></i>
                            </div>)
                            :
                            (<div className="btn btn-start" onClick={props.handleStart}>
                                <i className="fa fa-play"></i>
                            </div>)
                    }


                </div>
            </div>
        </div>
    )
}

export default CountdownBody;

// import React, { Component } from 'react'



// export class CountdownBody extends Component {

//     render() {
//         

//         return (

//         );
//     }
// }

// export default CountdownBody;
