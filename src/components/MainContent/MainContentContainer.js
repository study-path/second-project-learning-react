import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { getUserProfile } from '../../redux/profile-reducer';
import MainContent from './MainContent';

class MainContentContainer extends React.Component{
  
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }


  render(){   
    return (
      <div>
        <MainContent {...this.props} profile= {this.props.profile}/>
      </div>
    )
  }
  
}

let mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile  
  }
}

export default compose(
  connect (mapStateToProps, {getUserProfile}),
  withRouter,
  // wirthAuthRedirect
) (MainContentContainer);

