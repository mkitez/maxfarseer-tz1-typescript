import { combineReducers } from 'redux'
import session, { ISessionState } from './session'

export interface IState {
  session: ISessionState
}

export default combineReducers({
  session,
})
