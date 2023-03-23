import React from 'react'

function Hoc(props) {
  return (
    <div>
       
      <h2 style={{backgroundColor:"blueviolet",width:100}}><props.cmp/></h2>

      <h2 style={{backgroundColor:"red",width:100}}><props.cmp/></h2>

      <h2 style={{backgroundColor:"palegreen",width:100}}><props.cmp/></h2>

   
      
    </div>
  )
}

export default Hoc
