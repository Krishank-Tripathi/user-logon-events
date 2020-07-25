import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const UserBlock = ({ user }) => {

  let timeZone = user.tz.replace('/', ','); //To handle issue with / in parameter
  return (
    <Link to={`/user/${user.id}/${user.real_name}/${timeZone}/${JSON.stringify(user.activity_periods)}`}>
      <div className="user-block">
        <div>{user.real_name}</div>
        <p>TimeZone : {user.tz}</p>
      </div>
    </Link>
  );
};


export default UserBlock;
