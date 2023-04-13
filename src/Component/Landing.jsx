import React from 'react'




import AudioFile from './AudioFile'

import Type from './Type'

export default function Landing(props) {
  return (
    <div className={`flex justify-center mt-[1rem] ${props.style}`}>
       <Type/>
    </div>
  )
}
