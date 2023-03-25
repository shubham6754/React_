import React,{Component} from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome';

class App extends Component{
  render(){
    return(
      <div className='App'>
      <Greet name="aman" >
      <p>This is the children props</p>
      </Greet>

      <Greet name="Shubham" />
      <Greet name="Rashmi" />
      <Welcome name="Superman"/>

    </div>
    );
  }
}

export default App;