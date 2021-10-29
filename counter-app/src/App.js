import './App.css';
import { Component } from 'react';
import Button from './components/Button';

<<<<<<< HEAD
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      count:0
    };
  }

  incrementCount = () => {
      this.setState({
        count: this.state.count + 1
      });
    }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  }


  doCount = (isAdd) => {
    this.setState({
      count: this.state.count + (isAdd ? 1 : -1)
    });
  }

  render() {
    let { count } = this.state
      return (
    <div>
      <h2>Count: { count } </h2>
      <Button
        title = { "+" }
        task = { () => this.incrementCount() }
      />
      <Button
        title = { "-" }
        task = { () => this.decrementCount() }
      />
=======
function App() {
  return (
    <div className="App">
      
>>>>>>> e811351528233adb8e7cee8305e084ee47c0ccd3
    </div>
    );
   }


}
