import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"

import "../../../styles/productform.scss"
import ProductList from './ProductList'

export const prodInitial = {
  title: "",
  category: "",
  price: 0,
  stock: 0,
  rating: 0,
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCSfwnv3WeBM1vlNCsNVA5XQox93AUwXCk3n48YeYZSzltidySxqb4VvTvKhoYNSNTkZVSlhzFV609fDdwafWG_qoCv8E6dxlYokvmMHe4iqLl3TPM0r4hxQ"
}


const ProductForm = ({productData, setProductData}) => {

  const {

    register,
    handleSubmit,
    reset,
    formState: { errors, isValidating, isSubmitting }

  } = useForm({ defaultValues: prodInitial })


  const handle_form = (data) => {
      add_data(data)
  }

  const add_data = (data) => {

    let obj = {
      id : Date.now(),
      ...data
    }
     setProductData([...productData, obj])
  }
  


  return (
    <div className='form-container'>


      <form onSubmit={handleSubmit(handle_form)} className='form-div' action="">

        <div>
          <h3>Add Product</h3>
        </div>


        <input type="text" placeholder='title' {...register("title")} />

        <select {...register("category")}>
          <option value="">Select Category</option>
          <option value="laptop">Clothing</option>
          <option value="accessories">Accessories</option>
          <option value="laptop">Laptop</option>
        </select>

        <input type='number' placeholder='price' {...register("price", {valueAsNumber:true})} />

        <input type="number" placeholder='stock' {...register("stock")} />

        <input type="number" placeholder='rating' {...register("rating")}/>

        <input type="text" placeholder='image...' {...register("image")} />


        <div className='action-btn'>
          <button onClick={() => reset()} className='clear-btn'>Cancel</button>
          <button className='submit-btn'>Add</button>
        </div>

      </form>



    </div>
  )
}

export default ProductForm