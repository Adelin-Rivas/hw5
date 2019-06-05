import React, { Component } from 'react';
import { isSuper } from '@babel/types';
   
class Counter extends Component {
     state={

     }

    
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
   
    render() { 
         
        return ( 
        
        
        
        
        <form>
            <label>
              FirstName: 
              <input type="text" name="Firstname" />
              LastName:
              <input type="text" name="lastName"/>
            </label>
            <input type="submit" value="Submit" />
          </form>
            );
    }
}
 
export default Counter;