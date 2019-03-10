import * as React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'

interface INewsItem {
  title: string
  content: string
}

export interface IProps {
  data: INewsItem[]
}

class NewsContainer extends React.Component<IProps> {
  public render() {
    const { data } = this.props
    return <News data={data} />
  }
}

const mapStateToProps = () => ({
  data: [],
})

export default connect(mapStateToProps)(NewsContainer)
