import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        count: 0
    };
    render() { 
        React.createElement('div')
        return (
            <span className = {this.state.formatCount()}></span>

            <h1>Hello World</h1><button>hhh</button>
        
        );
        


        formatCount () {
            const{count} = this.state;
            return {count} === 0 ? "zero" : count;
        }
           
            
    
    };
}
 
export default Counter;