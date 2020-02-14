import React, { Component } from 'react';

import "./CountdownFooter.css";

export class CountdownFooter extends Component {
    render() {
        return (
            <div className="countdown-footer">
                <div className="countdown-speed-buttons">
                    <div className="btn btn-outline-dark">
                        1x
              </div>
                    <div className="btn btn-outline-dark">
                        1.5x
              </div>
                    <div className="btn btn-outline-dark">
                        2x
              </div>
                </div>
            </div>
        );
    }
}

export default CountdownFooter;