import { Inter } from '@next/font/google'
import Template from './template/template'
import Elink from '@/app/global/elink'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black w-screen h-screen' style={{color: "#FFFFFF"}}>
      <Template/>
      <div className='relative w-screen h-screen relative'>
        <div className='absolute' style={{top: "20%",left: "20%"}}><Elink link="Version"/></div>
        <div className='absolute' style={{top: "40%",left: "30%"}}><Elink link="Portfolio"/></div>
        <div className='absolute' style={{top: "50%",left: "70%"}}><Elink link="Resume"/></div>
        {/* <div className='absolute' style={{top: "20%",left: "80%"}}><Elink link="Version"/></div> */}
      </div>
    </div>
  )
}
