import React from 'react'

export default function Alert(props) {

  const capatalize=(word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);

  }

  return (
    <div style={{height:'50px'}}>
     {props.alert && <div className={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
  <strong>{capatalize(props.alert.status)}</strong>:{props.alert.message} 
  </div>}
</div>
    
  )
}


