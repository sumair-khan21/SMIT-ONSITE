import React, { Suspense, useState } from 'react'
import About from './About'


const MySuspense = () => {
    const [loading, setLoading] = useState(false)
    const LazyAbout  = React.lazy(()=> import('./About'))
  return (
    <div>
        <h1>Home</h1>
        {
            loading ?  <Suspense fallback={<h1>Loading</h1>}><LazyAbout /></Suspense> : null 
            
            }
        
        <button onClick={()=> setLoading(true)}>Suspense Loading</button>
    </div>
  )
}

export default MySuspense





