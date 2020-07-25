import React from 'react';
import { Link } from 'react-router-dom';
import IconText from '../common/icon-text';
import MyCalendar from './calendar';

import './styles.scss';

const User = (props) => {

  //console.log(props);
  if (!props.match.params) return (<div> Loading ...</div>);

  const Activity = (props) => (
    <div className="activity-block">
      <div className='title'>Activity Found</div>
      <p>From : <span>{props.activity.start_time}</span></p>
      <p>To : <span>{props.activity.end_time}</span></p>
    </div>
  );

  let currentUser = props.match.params;
  let activityList = JSON.parse(currentUser.activityList);

  return (
    <div className="user-page">
      <Link to="/home" className="go-back go-back-top">
        <IconText icon="icon-left-arrow" text="Back to list" />
      </Link>
      <section className="user-info">
        <div>
          <h1>User: {currentUser.name}</h1>
          <p>As per {currentUser.timezone} Timezone</p>
          {
            activityList ? activityList.map(event => {
              return <Activity activity={event} />
            }) : <div>No Acivity Found</div>
          }
          <div>Events shown in Calendar</div>
          {
            activityList ? <MyCalendar eventDates={activityList} /> : ''
          }
        </div>
      </section>
    </div>
  );
};
export default User;
