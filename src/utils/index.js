
const universalActionCreator = (type, payload, meta = {}, isError = false) => {

    const action = {
        type,
        payload,
        meta,
    };

    if (isError) {
        return {
            ...action,
            meta: {
                ...action.meta,
                timestamp: new Date(),
            },
            error: isError,
        };
    }

    return action;
};

export default universalActionCreator;
