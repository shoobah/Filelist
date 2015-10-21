import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor( props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          Fillista
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
