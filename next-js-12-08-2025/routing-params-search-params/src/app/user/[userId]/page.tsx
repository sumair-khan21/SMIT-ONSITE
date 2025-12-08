import React from 'react'


//search params
const page = async ({params, searchParams}: {params: {userId: string}, searchParams: {userId: string}}) => {
    const {userId} = await params
    // const {userId: searchUserId} = await searchParams
    const searchParamss = await searchParams
    console.log("searchParamss", searchParamss);
    
  return (
    <>
    
    <h1>hello {userId}</h1>
    <h1>hello {searchParamss.userId}</h1>
    </>
  )
}

export default page