const customMiddleware = ({ dispatch }) => next => action => {
    console.log('middleware action: ',action);
    next(action);
};

export default customMiddleware;