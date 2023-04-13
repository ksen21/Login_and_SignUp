




import React,{useState,useEffect} from 'react'



export default function Home(props) {





  return (
  <>
  <div>

     <h2 className='text-4xl text-center mt-6'>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
  </div>

  </>
  )
}
