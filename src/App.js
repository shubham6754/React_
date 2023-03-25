import React,{Component} from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Comment from './components/Comment';


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

class App extends Component{



  render(){
    return(
      <div className='App'>
    <Hello/>
    <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
    </div>
    );
  }
}

export default App;