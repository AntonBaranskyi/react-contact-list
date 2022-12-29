import React from 'react';

 const Success = ({ invitedUsers }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {invitedUsers} пользователям отправлено приглашение.</p>
      <button onClick={()=>window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};

export default Success;