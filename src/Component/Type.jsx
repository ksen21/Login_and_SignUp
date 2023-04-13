


import React from 'react'
import Typewriter from 'typewriter-effect';
import './Type.css';
export default function Type() {
  return (
    <>
    <Typewriter
      options={{
        strings: ['Hello', 'Monica', ' I Love You', "I can't Live Without You", "Mh Sanem 😍" ],
        autoStart: true,
        loop: true,
      }}/>
 

  
    </>

  )
}
