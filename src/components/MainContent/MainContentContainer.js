import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import MainContent from './MainContent';

class MainContentContainer extends React.Component{
  
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 15306;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }


  render(){   
    return (
      <div>
        <MainContent {...this.props} profile= {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    )
  }
  
}

let mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // wirthAuthRedirect
) (MainContentContainer);

