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
    if(!this.state.data.Files) return null;
    return (
      <div className="container">
        <div className="row">
          <ListFiles files={this.state.data.Files} />
        </div>
      </div>
    )
  }
}

export default App
