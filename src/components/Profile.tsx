import * as React from 'react'
import { IProps } from '../containers/ProfileContainer'

const Profile = ({ user }: IProps) => {
  return (
    <>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </>
  )
}

export default Profile
