import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

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
    if(!this.props.isAuth) return <Redirect to ='/login' />

    return (
      <div>
        <MainContent {...this.props} profile= {this.props.profile}/>
      </div>
    )
  }
  
}


let mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}


let WithUrlDataContainerComponent = withRouter(MainContentContainer)
export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

