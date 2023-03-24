import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var[fname,setFname]= useState("Meera")

    const changeName = () =>{
        setFname("Adithyan")
    }
  return (
    <div>
      <Typography>Welcome {fname}</Typography>
      <br></br>
      <Button variant='contained'onClick={changeName} >Change</Button>
    </div>
  )
}

export default Statebasic
