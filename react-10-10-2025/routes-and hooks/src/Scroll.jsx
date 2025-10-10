import React, { useEffect, useRef, useState } from 'react'
import Abc from './abc'

const Scroll = () => {
    const [positionPoint, setPositionPoint] = useState(false)
    const divRef = useRef()
    useEffect(() => {
      const handleScroll = () =>{
        if(divRef.current.scrollTop > 10){
            setPositionPoint(true)
            console.log(divRef.current.scrollTop);
        }else{
            setPositionPoint(false)
            console.log(divRef.current.scrollTop);
        }
      }
      const container = divRef.current
     return ()=>{
         container.addEventListener('scroll', handleScroll)
     }
    
        
    }, [])
    


  return (
    <>
    {/* <h1>hello</h1> */}
    {/* <div ref={divRef} style={{height: "300px", overflow: "scroll", border: "1px solid pink", backgroundColor: positionPoint ? "red" : "green"}}>
        <h1>Scroll</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, excepturi laboriosam assumenda reprehenderit dignissimos provident maiores ab ratione nemo vitae cum vero a corporis dolorem? Modi magnam molestias dignissimos laborum.

    </div> */}

    <div ref={divRef} style={{height: "200px", overflow: "scroll", border: "1px solid pink", backgroundColor: "blue"}}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
            {positionPoint ? <Abc /> : null}
            <div style={{ height: '200px', padding: '10px' }}>
                    Scroll me to show content below!
                </div>
    </div>


    
    </>
  )
}

export default Scroll
