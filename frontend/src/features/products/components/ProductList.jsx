import { useEffect, useState } from "react"
import ProductForm from "./ProductForm"
import ProductCard from "./ProductCard"

import "../../../styles/productcard.scss"

const ProductList = () => {

  const [productData, setProductData] = useState(JSON.parse(localStorage.getItem("prod-data")) || [])

  const [openModal, setOpenModal] = useState(true)


  useEffect(() => {
    localStorage.setItem("prod-data", JSON.stringify(productData))
  }, [productData])




  return (
    <div className="product-list">

      <div className="header">
        <h3>Product Listing..</h3>

        <button onClick={() => setOpenModal(true)} className="header-btn">Add</button>
      </div>

      {openModal && <ProductForm productData={productData} setProductData={setProductData} setOpenModal = {setOpenModal} />}

      <ProductCard productData={productData} setProductData={setProductData} />


    </div>
  )
}

export default ProductList