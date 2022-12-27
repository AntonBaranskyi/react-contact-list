import "./index.scss";
import WrapperUsers from "./components/WrapperUsers/WrapperUsers";

import { useState, useEffect } from "react";
import { getData } from "./components/services/data";

function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    getData("https://reqres.in/api/users").then(LoadUserData);
  };

  const LoadUserData = (resp) => {
    console.log(resp);
    setUsers(resp.data);
    setLoading(false);
  };
  const updateUserTerm = (term) => {
    setTerm(term);
  };

  const serchUser = (searchTerm, users)=>{
    if(searchTerm !== ''){
      return users.filter(user=>user.first_name.indexOf(searchTerm) > -1);
    }else{
      return users;
    }
    
  }

  const filterData = serchUser(term, users);

  return (
    <div className="App">
      <WrapperUsers
        updateUserTerm={updateUserTerm}
        loading={loading}
        users={filterData}
      />
    </div>
  );
}

export default App;
