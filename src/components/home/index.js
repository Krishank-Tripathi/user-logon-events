import React from 'react';
import {compose,withHandlers} from 'recompose';


import UserList from './user_list';


const Home = (props) => {
  const {userList} = props;
  
  return (
    <React.Fragment>
		<UserList users={userList}/>
    </React.Fragment>
  );
};


//latest, now playing, upcoming
Home.defaultProps = {
  userList: []
};

export default compose(
  withHandlers({

  }),
)(Home);
