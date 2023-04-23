import React from 'react'

const { version } = require('../../../package.json');

const footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 flex w-screen shadow-md z-10 bg-transparent px-4 py-3'>
      The Program version is {version}
    </footer>
  )
}

export default footer