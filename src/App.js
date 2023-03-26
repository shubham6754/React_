import React,{Component} from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/Event Handling/FunctionClick';
import ClassClick from './components/Event Handling/ClassClick';
import EventBind from './components/Binding_Event_handlers/EventBind';
import ParentComponent from './components/Methods as props/ParentComponent';
import UserGreeting from './components/Conditional Redering/UserGreeting';
import NameList from './components/List Rendering/NameList';

class App extends Component{
  
  render(){
    return(
      <div className='App'>
       <NameList/>
    </div>
    );
  }
}

export default App;