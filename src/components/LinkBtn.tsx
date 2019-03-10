import * as React from 'react'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

interface IProps {
  to: string
  label: string
}

const LinkBtn = ({ to, label }: IProps) => {
  return (
    <Link to={to}>
      <Button variant="raised" color="primary">
        <span>{label}</span>
      </Button>
    </Link>
  )
}

export default LinkBtn
