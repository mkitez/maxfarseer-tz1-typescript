import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/SessionActions'
import { ISessionAction } from '../actions/SessionActions'

export interface IUser {
  name: string
}

export interface ISessionState {
  user: null | IUser
  errorMsg: string
}

const initialState: ISessionState = {
  user: null,
  errorMsg: '',
}

export default (state = initialState, action: ISessionAction) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
        errorMsg: '',
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
  }
}
