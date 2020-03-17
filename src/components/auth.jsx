import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setGithubKey } from '../actions';


const mapDispatchToProps = dispatch => ({
    setKey: key => {
        dispatch(setGithubKey(key));
    },
});

const validate = text => (text && text.match(/(.*):(.*)/));

const Auth = ({ setKey }) => {

    const submitHandler = e => {

        const { value } = e.target;
        const isValid = validate(value);

        if (e.key === 'Enter' && isValid) {

            setKey(value);
        } else {
            // eslint-disable-next-line no-console
            console.log('Not a valid user/key string');
            // TODO dispatch action to display validation error
        }
    };

    return (
        <input
          onKeyPress={submitHandler}
          className="auth-input"
          placeholder="Format: username:key"
          type="text"
          name="key" />
    );
};

Auth.propTypes = {
    setKey: PropTypes.func.isRequired,
};

export default connect(
    null,
    mapDispatchToProps,
)(Auth);
