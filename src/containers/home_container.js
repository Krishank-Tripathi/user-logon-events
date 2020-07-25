import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserList } from '../appRedux/action/home_action';
import Home from '../components/home';

export class HomeContainer extends PureComponent {
  componentDidMount() {
    const { getUserList } = this.props;

    getUserList();
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state.UserListReducer
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getUserList,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
