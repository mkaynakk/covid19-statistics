import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '@/reducers/index'
import rootSaga from '@/sagas/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware) as any)

sagaMiddleware.run(rootSaga)

export default store
