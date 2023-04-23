import React from 'react'
import Elink from '@/app/global/elink'

const navbar = () => {
  return (
    <navbar className='fixed top-0 left-0 flex w-screen z-10 bg-transparent px-4 py-3'>
      <div className='mr-auto'>
        {/* <Elink link="Version"/> */}
      </div>
      <div className='mx-auto' style={{fontSize: "1.5rem"}}>
        MAIN
      </div>
      <div className='ml-auto'>
        {/* <Elink link="Version"/> */}
      </div>
    </navbar>
  )
}

export default navbar