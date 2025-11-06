import React from 'react'
import { useAddNewProductMutation } from '../../app/service/dummyData'

const AddNewProduct = () => {
  const [addNewProduct, {
    data, isError, isLoading
  }] =  useAddNewProductMutation();

  const handleAddProduct = async () => {
    try {
        const newPrdData = {
            id:1, 
            title:"amzona",
            description:"acc"
        }
        await addNewProduct(newPrdData)
    } catch (error) {
        console.error("error")
    }
  }
  return (
    <div>
        <div>
            {data?.id} - {data?.title} - {data?.description}
        </div>
        <button onClick={handleAddProduct} disabled={isLoading}>add new product</button>
    </div>
  )
}

export default AddNewProduct