import React, { Component } from 'react';

import User from '../components/user';

export class UserContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <User {...this.props} />
    );
  }
}

export default UserContainer;
