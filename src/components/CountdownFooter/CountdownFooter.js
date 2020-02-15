import React from 'react';

import "./CountdownFooter.css";

const speeds = [1, 1.5, 2];

function CountdownFooter(props) {
    return (
        <div className="countdown-footer container">
            <div className="countdown-speed-buttons">
                {
                    speeds.map(elem => (
                        <div key={elem} className="btn btn-outline-dark" onClick={()=>props.changeSpeed(elem)}>
                            {elem}x
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CountdownFooter;