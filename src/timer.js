import React, { Component } from 'react';
import update from 'immutability-helper'; 
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elapsed : 0, 
            start: props.start
        }
    }

    componentDidMount(){

        // componentDidMount is called by react when the component 
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(() => {
            this.tick()
        }, 50);
    }

    tick() {
        // This function is called every 50 ms. It updates the 
        // elapsed counter. Calling setState causes the component to be re-rendered
        var state = update(this.state, {
            elapsed: {$set: (new Date() - this.state.start)}
        })        
        this.setState(state);
    }

    componentWillUnmount(){

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    }

    render() {

        
        var elapsed = Math.round(this.state.elapsed / 100);
        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);    
        return (
            <p>This example was started <b>{seconds} seconds</b> ago.</p>
        );
    }
}

export default Timer;