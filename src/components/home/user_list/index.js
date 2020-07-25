
import React from 'react';
import UserBlock from '../user_block';
import './styles.scss';

const UserList = (props) => {
  return props.users.length === 0 ? (
    <div className="box">No Data Found</div>
  ) : (
      <div className="box">
        <h1>User List ...</h1>
        <section className="user-list">
          {props.users.map((user) => (
            <UserBlock
              user={user}
              key={`user-${user.id}`}
            />
          ))}
        </section>
      </div>
    )
}
export default UserList;
