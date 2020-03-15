import React from 'react';
import { connect } from 'react-redux';
import { setGithubKey } from '../actions';
  

const mapDispatchToProps = dispatch => ({
    setKey: key => {
        dispatch(setGithubKey(key));
    }
});

const validate = text => {

    return text && text.match(/(.*):(.*)/);
};

const Auth = ( { setKey } ) => {

    const submitHandler = e => {

        const value = e.target.value;
        const isValid = validate(value);

        if (e.key === 'Enter' && isValid) {

            setKey(value);
        } else {
            console.log("Not a valid user/key string")
            // TODO dispatch action to display validation error
        }
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