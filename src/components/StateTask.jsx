import React, { useEffect,useState } from 'react'
import {Button,Typography}from '@mui/material'
const StateTask = () => {
    var [pagename, setpagename] = useState()
    useEffect(()=>{
        setpagename("use Effect")
    },[])
  return (
    <div>
      <br></br>
      <Button variant='contained' color='primary'>homepage</Button>
      <Button variant='contained' color='secondary'>gallerypage</Button>
      <Button variant='contained' color='error'>Contact page</Button>
      <Typography>Welcome to{pagename}</Typography>
    </div>
  )
}

export default StateTask
