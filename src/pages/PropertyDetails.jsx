import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetHomeQuery } from '../feature/houseApi'
// import {BiBath, BiBed, BiArea} from 'react-icons/bi'

const PropertyDetails = () => {
  const {id} = useParams()
  const {isLoading, isError, error, data: homeDetails} = useGetHomeQuery(id)

  // what to render 
  let content;
  if(isLoading) {
    return content = (
      <ImSpinner2 className=" mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }else if(!isLoading && isError) {
    return content = (
      <div className=" text-center text-3xl font-semibold text-gray-400 mt-48 ">
        {" "}
        {error?.data}
      </div>
    )
  }else if(!isLoading && !isError && !homeDetails?.id) {
    return content = (
      <div className=" text-center text-3xl font-semibold text-gray-400 mt-48 ">
        {" "}
        Sorry, nothing found
      </div>
    )

  }else if(!isLoading && !isError && homeDetails?.id) {

    
  }
  console.log(homeDetails)
  
  return (
    <div>PropertyDetails</div>
  )
}

export default PropertyDetails