import React from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from '@material-ui/core/styles';


class GroupedButtons extends React.Component {
    state = { counter: 1 };
  
    handleIncrement = () => {
      this.setState(state => ({ counter: state.counter + 1 }));
    };
  
    handleDecrement = () => {
        if(this.state.counter > 1){
            this.setState(prevState => ({counter: prevState.counter-1}))
         }
    };

    render() {
      return (
        <ButtonGroup size="medium" aria-label="small outlined button group">
            <Button onClick={this.handleDecrement}>-</Button>
            <Button>{this.state.counter}</Button>
            <Button onClick={this.handleIncrement}>+</Button>
        </ButtonGroup>
      );
    }
  }
  
  export default GroupedButtons;