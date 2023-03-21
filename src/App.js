import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const friends = [
  {name:'sagor ' , job: 'electrical'},
  {name:'hasan ' , job: 'mechanical'},
  {name:'anamul ' , job: 'civil'},
  {name:'shahin ' , job: 'etb'},

]

function App() {
  
  return (
    <div className="App">
      <Counts></Counts>
      {
          friends.map(friend => <Parson name={friend.name} job={friend.job}></Parson>)
      }
      
        <UserLoad></UserLoad>
      
    </div>
  );
}
function UserLoad (){
  const [users, setUsers] = useState([])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div className='friend-list'> 
      {
        users.map(user => <UserShow name={user.name} email={user.email}></UserShow>)
      }
    </div>
    
  )
}
function UserShow(props){
  return(
    <div className='parson-list'>
      <h3> Name : {props.name}</h3>
      <p>Email : {props.email}</p>
    </div>
  )
}
function Counts(){
  const [count, setCount] = useState(55)
  const CountPlas = ()=>(setCount(count+1))
  const CountMinus = () => (setCount(count -1))
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={CountPlas}>Add</button>
      <button onClick={CountMinus}>CountMinus</button>
    </div>
  )
}
function Parson(props){
  return(
    <div className='parson-list'>
      <h1>My name is : {props.name} </h1>
      <p>my work is {props.job} </p>
    </div>
  )
}

export default App;
