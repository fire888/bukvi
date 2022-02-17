import { createStore , applyMiddleware, compose} from 'redux'
import { rootReducer } from '../redux/reducer'
import thunk from 'redux-thunk';


// удалили "начальное состояние = initial state"
// так как теперь наш редьюсер составной,
// и нам нужны initialState каждого редьюсера.
// Это будет сделано автоматически.

// export const store = createStore(rootReducer, applyMiddleware(thunk))


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));
