import 'react'
import ListFiles from './listfiles'

export default class FileItem extends React.Component {
  constructor( props) {
    super(props)
    this.state = {
      open: false
    }
  }
  
  getIcon(type){
    switch(type){
      case 'application/pdf':
        return 'p '
      break
      case 'folder':
        return '+ '
      break
      default:
        return ''
    }
  }
  
  renderChildren(item){
    console.log('state', this.state.open + ' ' + item.Name);
    if(item.children && this.state.open){
      return <ListFiles key={'F-' + item.Id} files={item.children}/>
    }
    return null  
  }
  
  getStyle(item){
    if(item.Type==='folder'){
      return {
        cursor: 'pointer'
      }
    } else {
      return {
        cursor: 'normal'
      }
    }
  }
    
  handleClick(item, e){
    e.stopPropagation()
    if(item.Type === 'folder'){
      this.setState({
        open: !this.state.open
      })
    }
  }
  
  render(){
    let item = this.props.item
    return(
      <li key={item.Id} onClick={this.handleClick.bind(this, item)} style={this.getStyle(item)}>
        {this.getIcon(item.Type)}{item.Name}
        {this.renderChildren(item)}
      </li>
    )
  }
}
