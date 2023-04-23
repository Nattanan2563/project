import React from 'react'
import Elink from '@/app/global/elink'

const navbar = () => {
  return (
    <navbar className='fixed top-0 left-0 flex w-screen shadow-md z-10 bg-stone-400'>
        <Elink link="Portfolio"/>
        <Elink link="Resume"/>
    </navbar>
  )
}

export default navbar