import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {


    render() { 
        return (
            <div>
                <button 
                    onClick={this.props.OnReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {this.props.counters.map(counter =>(
                    <Counter
                    key={counter.id}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    counter={counter}
                    />
                ))}
            </div>
          );
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value ===0 ? "Zero" : value;
    }
}

export default Counters