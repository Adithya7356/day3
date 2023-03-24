import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';

const StateEffect = () => {
    var[value,setvalue]= useState();
    useEffect(()=>{
        setvalue("Hello")
    },[])
  return (
    <div>
        <Typography variant='h2'>{value}</Typography>

    </div>
  )
}

export default StateEffect

