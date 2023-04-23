import React from 'react'
import Elink from '@/app/global/elink'
import CursorAnimationImage from '@/app/global/cursoranimationimage'
import Link from 'next/link'

const section = () => {

  return (
    <>
      {/* <img src="../images/pikachu1.png"/> */}
      <div style={{position: "absolute",left: "50%",top: "60%",transform: "translate(-50%, -50%)",display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
        <div style={{fontSize: "60px",marginBottom: "60px"}}>A Project</div>
        <div style={{cursor: "pointer",backgroundColor: "gray",width: "fit-content",width: "8vw",height: "5vh",borderRadius: "2.5vh",display: "flex",justifyContent: "center",alignItems: "center"}}>
          <Link href="main">Enter</Link>
        </div>
      </div>
      <CursorAnimationImage src="../images/pikachu1.png" pos='60,80'/>
    </>
  )
}

export default section