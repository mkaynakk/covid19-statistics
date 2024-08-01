import { combineReducers } from 'redux'
import {
  FETCH_COUNTRY_DATA,
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COUNTRY_DATA_FAILURE,
} from '@/reducers/actions'
import { TAction } from '@/reducers/types'

const initialState = {
  data: null,
  loading: false,
  error: null,
}

const countryReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case FETCH_COUNTRY_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case FETCH_COUNTRY_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  country: countryReducer,
})

export default rootReducer
