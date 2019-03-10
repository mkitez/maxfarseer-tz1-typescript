import * as React from 'react'
import { RouteProps } from 'react-router'
import { Redirect } from 'react-router-dom'
import { IUserParams } from '../actions/SessionActions'

interface IProps extends RouteProps {
  errorMsg: string
  logIn(credentials: IUserParams, callback: () => void): void
}

class Login extends React.Component<IProps> {
  public state = {
    redirectToPreviousRoute: false,
    username: '',
    password: '',
  }

  public handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn(
      {
        username,
        password,
      },
      () => {
        this.setState({ redirectToPreviousRoute: true })
      }
    )
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName

    if (typeof fieldName === 'undefined') {
      return
    }

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  public render() {
    const { location, errorMsg } = this.props
    const { from } = (location && location.state) || { from: { pathname: '/' } }
    const { username, password, redirectToPreviousRoute } = this.state

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }

    return (
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'username'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Имя'}
            value={username}
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль'}
            value={password}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
}

export default Login
