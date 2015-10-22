import React from 'react'
import ListFiles from './listfiles'
import FileInfo from './fileinfo'

export default class extends React.Component {
  constructor( props) {
    super(props)
    this.state = {
      open: false
    }
  }

  
  render(){
    return(
      <ul style={{listStyle:'none'}}>
        {this.props.files.map((item, index) => (
          <FileInfo key={item.Id} item={item}/>
        ))}
      </ul>
    )
  }
}
