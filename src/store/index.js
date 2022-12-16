import { legacy_createStore, combineReducers, compose } from 'redux';
import ServiceListReducer from '../reducers/serviceListReducer';
import ServiceAddReducer from '../reducers/serviceAddReducer';
import ServiceFilterReducer from '../reducers/ServiceFilterReducer';

const ReactreduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      ServiceList: ServiceListReducer,
      ServiceAdd: ServiceAddReducer,
      ServiceFilter: ServiceFilterReducer,

    }),
    undefined,
    compose(
      ReactreduxDevTools,
    )
  )
}

export default configureStore;

