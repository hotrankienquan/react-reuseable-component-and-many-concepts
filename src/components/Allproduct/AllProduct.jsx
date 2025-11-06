import React from 'react'
import { useGetAllProductQuery } from '../../app/service/dummyData';

const AllProduct = () => {
    const {
        data, isError, isLoading
    } = useGetAllProductQuery();


    if(isError){
        return <h1>Oh no, we got an error</h1>
    }

    if(isLoading){
        return <h1>loading.....</h1>
    }
  return (
    <div>{data?.products.map((p) => <h1 key={p.id}>{p.title}</h1>)}</div>
  )
}

export default AllProduct