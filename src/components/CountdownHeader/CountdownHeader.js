import React, { Component } from 'react';

import "./CountdownHeader.css";

export class CountdownHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            set: false
        };
    };

    handleChange = (event) => {
        this.setState({
            minutes: event.target.value,
            time: event.target.value * 60,
        });
    }


    handleStart = async (event) => {
        event.preventDefault();
        this.props.handleCountdown(this.state.time);
        this.props.handleStart();
        this.setState({ set: true })
    }

    handleReset = (event) => {
        event.preventDefault();
        // this.props.handleReset();
        this.setState(
            { minutes: 0, set: false }
        );
    }



    render() {
        return (
            <div className="countdown-header container">
                <div className="countdown-form">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="input" className="font-weight-bold count">Countdown: </label>
                            <input
                                id="input"
                                type="number"
                                className="form-control"
                                placeholder="(Min)"
                                value={this.state.minutes === 0 ? "" : this.state.minutes}
                                onChange={this.handleChange}
                                min="1"
                            />
                        </div>
                        {
                            !this.state.set ? (<input
                                className="btn btn-form-start"
                                type="submit"
                                value="Start"
                                onClick={this.handleStart}
                            />)
                                : (<input
                                    className="btn btn-form-reset"
                                    type="submit"
                                    value="Reset"
                                    onClick={this.handleReset && this.props.handleReset}
                                />)
                        }

                    </form>
                </div>
            </div>

        )
    }
}

export default CountdownHeader;
