import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { wirthAuthRedirect } from '../../hoc/wirthAuthRedirect';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {

  return{
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    updateNewMessageBody: (body) =>{
      dispatch(updateNewMessageBodyActionCreator(body))
    },
    sendMessage: () =>{
      dispatch(sendMessageActionCreator())
    }
  }
}



export default compose(
  connect (mapStateToProps, mapDispatchToProps ),
  wirthAuthRedirect
)(Dialogs)