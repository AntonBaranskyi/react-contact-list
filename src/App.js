
import './index.scss';
import WrapperUsers from './components/WrapperUsers/WrapperUsers';

import { useState, useEffect } from 'react';
import { getData } from './components/services/data';

function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getUsersData();
  },[]);

  const getUsersData = ()=>{
    getData('https://reqres.in/api/users').then(LoadUserData)
  }

  const LoadUserData = (resp)=>{
    console.log(resp);
    setUsers(resp.data);
    setLoading(false);
  }
  return (
    <div className="App">
        <WrapperUsers users = {users}/>
    </div>
  );
}

export default App;
