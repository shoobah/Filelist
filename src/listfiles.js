import Ract from 'react'


function getIcon(type){
    switch(type){
      case 'application/pdf':
        return "p "
      break
      case 'folder':
        return '+ '
      break
      default:
        return ''
    }
  }

export default ({files}) => (
  <ul style={{listStyle:'none'}}>
    {files.map((item, index) => (
      <li key={item.Id}>{getIcon(item.Type)}{item.Name}</li>
    ))}
  </ul>
)
