// Core
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Instrument
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { middleware, sagaMiddleware } from './middleware';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);
