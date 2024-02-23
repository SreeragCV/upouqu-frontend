import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {

  const params = useParams()
  console.log(params);

  useEffect(() => {
    try{
      const fetchBookDetails = async () => {
        const response = axios.get()
      }
    }catch(e){

    }
  }, [])

  return (
    <div className='mt-24'>
      <h1>ssssssssssssssssssssssss</h1>
    </div>
  )
}

export default BookDetails
