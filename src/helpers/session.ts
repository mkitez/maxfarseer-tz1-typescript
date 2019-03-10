import { IUserParams } from '../actions/SessionActions'

export function checkCredentials(params: IUserParams): boolean {
  if (
    params.username.toLowerCase() !== 'admin' ||
    params.password !== '12345'
  ) {
    return false
  }

  return true
}
