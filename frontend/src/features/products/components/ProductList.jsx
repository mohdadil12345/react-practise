import { useEffect, useState } from "react"
import ProductForm from "./ProductForm"
import ProductCard from "./ProductCard"

import "../../../styles/productcard.scss"

const ProductList = () => {

  const [productData, setProductData] = useState(JSON.parse(localStorage.getItem("prod-data")) || [])

  const [openModal, setOpenModal] = useState(false)
  const [editData, setEditData] = useState(null)


  useEffect(() => {
    localStorage.setItem("prod-data", JSON.stringify(productData))
  }, [productData])




  return (
    <div className="product-list">

      <div className="header">
        <h3>Product Listing..</h3>

        <button onClick={() => setOpenModal(true)} className="header-btn">Add</button>
      </div>

      {openModal && <ProductForm productData={productData} setProductData={setProductData} setOpenModal = {setOpenModal} editData = {editData} setEditData = {setEditData}/>}

      <ProductCard productData={productData} setProductData={setProductData} editData = {editData} setEditData = {setEditData} setOpenModal={setOpenModal}/>


    </div>
  )
}

export default ProductList