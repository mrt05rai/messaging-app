import React , {useState, useEffect} from 'react'
import './App.css'
import { Button, Input, FormControl, FormLabel } from '@material-ui/core';
import Message from './components/Message'

function App() {
  const [input , setInput] = useState('');
  const [messages , setMessage] = useState([{}]);
  const [username, setUserName] = useState('');

  useEffect(()=>{
    setUserName(prompt('Enter your name'));
  },[])

  console.log(input)
  console.log(messages)

  const sendMessage  = (e)=>{
    e.preventDefault();
    setMessage([...messages , {username,input}])
    setInput('')
  }
  return (
    <div className="App">
     <h1> Hello Messenger </h1>
  <h4>Welcome {username}</h4>
     <form>
      <FormControl>
        <FormLabel> Enter Message</FormLabel>
        <Input value={input} onChange={e => setInput(e.target.value)}/>
        <Button disabled ={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message </Button>
      </FormControl>
     </form>

     {
       messages.map( message => (
         <Message username ={username} message={message}/>
       ))
     }
    </div>
  );
}

export default App;
