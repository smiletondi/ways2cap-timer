import React, { Component } from 'react';

import "./CountdownHeader.css";

export class CountdownHeader extends Component {



    render() {
        return (
            <div className="countdown-header">
                <div className="countdown-form">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="input" className="font-weight-bold count">Countdown: </label>
                            <input
                                id="input"
                                type="number"
                                className="form-control"
                                placeholder="(Min)"
                                min="1"
                            />
                        </div>
                        <input
                            className="btn btn-form-start"
                            type="submit"
                            value="Start"
                            onClick={this.props.aa}
                        />
                        {/* <div className="btn btn-form-reset"> RESET </div> */}
                    </form>
                    {/* <p className="form-error">
                <span >error</span>
              </p> */}
                </div>
            </div>

        )
    }
}

export default CountdownHeader;
