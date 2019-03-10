import { Action, Dispatch } from 'redux'

import { checkCredentials } from '../helpers/session'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export interface IUserParams {
  username: string
  password: string
}

interface IPayload {
  name?: string
  errorMsg?: string
}

export interface ISessionAction extends Action {
  payload: IPayload
  error?: boolean
}

export function logIn(params: IUserParams, cb: () => void) {
  return (dispatch: Dispatch) => {
    if (checkCredentials(params)) {
      dispatch({
        payload: {
          name: params.username,
        },
        type: LOG_IN,
      })
      cb()
    } else {
      dispatch({
        error: true, // https://github.com/redux-utilities/flux-standard-action
        payload: {
          errorMsg: 'Имя пользователя или пароль введены неверно',
        },
        type: LOG_IN_FAILURE,
      })
    }
  }
}

export function logOut(): Action {
  return {
    type: LOG_OUT,
  }
}
