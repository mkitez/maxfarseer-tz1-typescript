import * as React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { IState } from '../reducers'
import { IUser } from '../reducers/session'

export interface IProps {
  user: IUser
}

class ProfileContainer extends React.Component<IProps> {
  public render() {
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = (state: IState) => ({
  user: state.session.user,
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)
