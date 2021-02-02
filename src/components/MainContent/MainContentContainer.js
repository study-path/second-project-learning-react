import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUserProfile } from '../../redux/profile-reducer';
import MainContent from './MainContent';

class MainContentContainer extends React.Component{
  
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then( response => {
        this.props.setUserProfile(response.data)
      })
  }

  render(){    
    console.log("MainContentContainer.render", this.props);

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


let WithUrlDataContainerComponent = withRouter(MainContentContainer)
export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

