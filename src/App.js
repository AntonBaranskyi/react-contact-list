import "./index.scss";
import WrapperUsers from "./components/WrapperUsers/WrapperUsers";

import { useState, useEffect } from "react";
import { getData } from "./components/services/data";
import Success from "./components/Succsec/Success";

function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [invitedUsers, setInvitedUsers] = useState(0);
  const [succsec, setSuccsec] = useState(false);

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

  const serchUser = (searchTerm, users) => {
    if (searchTerm !== "") {
      return users.filter(
        (user) => user.first_name.toLowerCase().indexOf(searchTerm) > -1
      );
    } else {
      return users;
    }
  };

  const plusInvitedUser = () => {
    setInvitedUsers(invitedUsers + 1);
  };

  const toggleSuccess = () => {
    setSuccsec((succsec) => !succsec);
  };

  const togglePlus = (id)=>{
    const index = users.findIndex(user => user.id === id);

    return index;
  }
  const filterData = serchUser(term, users);

  return (
    <div className="App">
      {succsec ? (
        <Success invitedUsers = {invitedUsers} />
      ) : (
        <WrapperUsers
          updateUserTerm={updateUserTerm}
          loading={loading}
          users={filterData}
          plusInvitedUser={plusInvitedUser}
          invitedUsers={invitedUsers}
          toggleSuccess={toggleSuccess}
          togglePlus = {togglePlus}
        />
      )}
    </div>
  );
}

export default App;
