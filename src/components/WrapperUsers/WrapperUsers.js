import User from "../User/User";
import Search from "../Search/Search";
import Spinner from "../Spinner/Spinner";

const WrapperUsers = ({ users, loading, updateUserTerm }) => {
  return (
    <>
      <Search updateUserTerm={updateUserTerm} />

      <ul className="users-list">
        {loading ? <Spinner /> : <User users={users} />}
      </ul>

      <button className="send-invite-btn">Отправить приглашение</button>
    </>
  );
};

export default WrapperUsers;
