import React from 'react';
import { connect } from 'react-redux';
import { setGithubKey } from '../actions';
  

const mapDispatchToProps = dispatch => ({
    setKey: key => {
        dispatch(setGithubKey(key));
    }
});

const Auth = ( { setKey } ) => {

    const submitHandler = e => {

        if (e.key === 'Enter') setKey(e.target.value); 
    };

    return (
        <input onKeyPress={submitHandler}
               className="auth-input"
               placeholder="Format: username:key"
               type="text"
               name="key" />
    );
};

export default connect(
    null,
    mapDispatchToProps
)(Auth);