import React,{Component} from 'react'
import './Counter.css'
class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    render(){
        return(
            <div className="counter">
                <CounterButton by={1} increment={this.increment} decrement={this.decrement}/>
                <CounterButton by={5} increment={this.increment} decrement={this.decrement}/>
                <CounterButton by={10} increment={this.increment} decrement={this.decrement}/>
                <br></br>
                <span>{this.state.counter}</span>
            </div>
        );
    }

    increment(by){
        this.setState({
            counter : this.state.counter + by 
        })
    }

    decrement(by){
        this.setState({
            counter: this.state.counter - by
        })
    }
}
class CounterButton extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }
    render(){
    return (
        <div className="counter">
           
    <button onClick={this.increment}>+{this.props.by}</button>
    <button onClick={this.decrement}>-{this.props.by}</button>
        </div>
    );
}
increment(){
   this.setState({
       counter: this.state.counter + this.props.by
   })
   this.props.increment( this.props.by)
}

decrement(){
    this.setState({
        counter: this.state.counter - this.props.by
    })
    this.props.decrement(this.props.by)
}

}

CounterButton.defaultProps = {
    by : 1
}

export default Counter