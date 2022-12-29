import User from "../User/User";
import Search from "../Search/Search";
import Spinner from "../Spinner/Spinner";

const WrapperUsers = ({ users, loading, updateUserTerm, plusInvitedUser, invitedUsers , toggleSuccess, togglePlus}) => {
  return (
    <>
      <Search updateUserTerm={updateUserTerm} />

      <ul className="users-list">
        {loading ? <Spinner /> : <User togglePlus = {togglePlus} plusInvitedUser = {plusInvitedUser} users={users} />}
      </ul>

    {invitedUsers ?(<button onClick={toggleSuccess} className="send-invite-btn">Отправить приглашение</button>) : null }
      
    </>
  );
};

export default WrapperUsers;
