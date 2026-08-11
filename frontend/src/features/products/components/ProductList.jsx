import { useEffect, useState } from "react"
import ProductForm from "./ProductForm"
import ProductCard from "./ProductCard"

import "../../../styles/productcard.scss"
import PaginationComponent from "../../../components/common/PaginationComponent"

const ProductList = () => {

  const [productData, setProductData] = useState(JSON.parse(localStorage.getItem("prod-data")) || [])

  const [openModal, setOpenModal] = useState(false)
  const [editData, setEditData] = useState(null)

  const [searchval, setsearchval] = useState("")

  const [pageNo, setPageNo] = useState(1)
  const [limit, setlimit] = useState(4)


  useEffect(() => {
    localStorage.setItem("prod-data", JSON.stringify(productData))
  }, [productData])


  // search...
  const filter_products = productData.filter((item) => item.title.toLowerCase().includes(searchval.toLocaleLowerCase()) ||
   item.category.toLowerCase().includes(searchval.toLowerCase())
)

// pagination
const totalPage = Math.ceil(filter_products.length/limit)
const startIndex = (pageNo - 1) * limit
const endIndex = startIndex + limit

const paginatedProducts = filter_products.slice(startIndex, endIndex)

useEffect(() => {
  setPageNo(1);
}, [searchval]);

  return (
    <div className="product-list">

      <div className="header">
        <h3>Product Listing..</h3>

       <input value = {searchval} onChange={(e) => setsearchval(e.target.value)} placeholder="search by title and category..."/>

        <button onClick={() => setOpenModal(true)} className="header-btn">Add</button>
      </div>

      {openModal && <ProductForm productData={productData} setProductData={setProductData} setOpenModal = {setOpenModal} editData = {editData} setEditData = {setEditData}/>}

      <ProductCard  productData={paginatedProducts} setProductData={setProductData} editData = {editData} setEditData = {setEditData} setOpenModal={setOpenModal}/>

       <PaginationComponent pageNo = {pageNo}  setPageNo = {setPageNo} totalPage = {totalPage} setlimit={setlimit} limit ={limit}/>


    </div>
  )
}

export default ProductList