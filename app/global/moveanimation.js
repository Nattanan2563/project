"use client";

import React, { useEffect } from 'react'
import { useState } from 'react'
import "./moveanimation.css"

function moveanimation(props) {
  const [xposition, setXposition] = useState(0);
  /*fetch("http://jsonplaceholder.typeicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data))*/

  useEffect(() => {
    if(props.left !== undefined){
      setXposition((xposition => "reverselefttoright"))
    }
  }, [])

  console.log(props.left)

  return (
    <>
    </>
  )
}

export default moveanimation