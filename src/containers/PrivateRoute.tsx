import * as React from 'react'
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { IState } from '../reducers'
import { IUser } from '../reducers/session'

interface IProps {
  component: React.ComponentType<RouteComponentProps>
  isAuth: IUser
}

const PrivateRoute: React.StatelessComponent<RouteProps> = ({
  component: Component,
  ...rest
}: IProps) => {
  const renderFn = (props: RouteComponentProps) =>
    rest.isAuth ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    )
  return <Route {...rest} render={renderFn} />
}

const mapStateToProps = (state: IState) => {
  return {
    isAuth: state.session.user,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
