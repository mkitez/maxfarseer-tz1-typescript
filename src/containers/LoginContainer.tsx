import { Action } from 'redux'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { logIn, IUserParams } from '../actions/SessionActions'
import Login from '../components/Login'
import { IState } from '../reducers'

const mapStateToProps = (state: IState) => ({
  errorMsg: state.session.errorMsg,
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, Action>
) => ({
  logIn: (params: IUserParams, cb: () => void) => dispatch(logIn(params, cb)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
