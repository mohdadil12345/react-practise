import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"

import "../../../styles/productform.scss"
import ProductList from './ProductList'

export const prodInitial = {
  title: "",
  category: "",
  price: "",
  stock: "",
  rating: "",
  image: ""
}

const ProductForm = ({ productData, setProductData, setOpenModal, editData, setEditData }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValidating, isSubmitting }

  } = useForm({ mode: "onChange", defaultValues: prodInitial })


  const handle_form = (data) => {

    if (editData) {
      update_data(data)
    } else {
      add_data(data)
    }
    setOpenModal(false)
    reset()

  }

  const add_data = (data) => {

    let obj = {
      id: Date.now(),
      ...data
    }
    setProductData([...productData, obj])
  }

const update_data = (data) => {
  const update_prod = productData.map((item) =>
    item.id === data.id
      ? { ...item, ...data }
      : item
  )

  setProductData(update_prod)
  setEditData(null)
}


  const handle_reset = () => {
    setOpenModal(false)
    reset(prodInitial)
    setEditData(null)

  }

  useEffect(() => {
    if(editData) {

      reset(editData)
    }else{
      reset(prodInitial)
    }
  }, [editData])



  return (
    <div className='form-container'>


      <form onSubmit={handleSubmit(handle_form)} className='form-div' action="">

        <div>
          <h3>Add Product</h3>
        </div>


        <input type="text" placeholder='title' {...register("title", { required: "title is required", minLength: { value: 6, message: "6 characters is required.." } })} />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}


        <select {...register("category", { required: "category is required" })}>
          <option value="">Select Category</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
          <option value="laptop">Laptop</option>
        </select>

        {errors.category && <p style={{ color: "red" }}>{errors.category.message}</p>}

        <input type='number' placeholder='price' {...register("price", { required: "price is required" , valueAsNumber: true})} />
        {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}

        <input type="number" placeholder='stock' {...register("stock", { required: "stock is required" })} />
        {errors.stock && <p style={{ color: "red" }}>{errors.stock.message}</p>}

        <input type="number" placeholder='rating' {...register("rating")} />

        <input type="text" placeholder='image...' {...register("image")} />


        <div className='action-btn'>
          <button onClick={handle_reset} className='clear-btn'>Cancel</button>
          <button className='submit-btn'>{editData ? "update" : "Add"}</button>
        </div>

      </form>



    </div>
  )
}

export default ProductForm