import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Increment = () => {
    let [value,setvalue]=useState(0)
    let increament=()=>{
        setvalue(value+1)
    }
    let decreament=()=>{
        setvalue(value-1)
    }
  return (
    <div>
        <br></br>
      <Typography>{value}</Typography>
      <Button onClick={increament}>+</Button>
      <Button onClick={decreament}>-</Button>
    </div>
  )
}

export default Increment
