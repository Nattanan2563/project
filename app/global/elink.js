/*import React from 'react'
import Link from 'next/link'

export const elink = () => {
  return (
    <div>
      <Link href={"/"} ></Link>
    </div>
  )
}*/
import React from 'react'
import Link from 'next/link'

const elink = (props) => {
  return (
    <Link href={props.link.toLowerCase()}>{props.link}</Link>
  )
}

export default elink