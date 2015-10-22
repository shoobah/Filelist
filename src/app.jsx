import React from 'react'
import ListFiles from './listfiles'

class App extends React.Component {
  constructor( props) {
    super(props)
    this.state = {
      data: JSON.parse(this.props.files)
    }
    console.log('ctor', this.state);
  }


  render() {
    console.log('this.state', this.state)
    if(!this.state.data) return null
    return (
      <div className="container">
        <div className="row">
          <ListFiles key={'root'} files={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App
