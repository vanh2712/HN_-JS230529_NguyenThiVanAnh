import React from 'react'

function Word({element}) {
  return (
    <div>
        <i className={element.iconClass}></i>
        <span>{element.name}</span>
        <h5></h5>
    </div>
  )
}

export default Word