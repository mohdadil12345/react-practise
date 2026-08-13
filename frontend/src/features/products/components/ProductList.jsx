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
  const [category, setcategory] = useState("all")
  const [sort, setSort] = useState("")

  const [pageNo, setPageNo] = useState(1)
  const [limit, setlimit] = useState(4)


  useEffect(() => {
    localStorage.setItem("prod-data", JSON.stringify(productData))
  }, [productData])


  // search...
let  filteredProducts = productData.filter((item) => {

  const matchSearch = item.title.toLowerCase().includes(searchval.toLowerCase()) ||
    item.category.toLowerCase().includes(searchval.toLowerCase()) 

 const matchCategory = category === "all"  || item.category == category

 return matchSearch && matchCategory

});

// sorting
if(sort) {
filteredProducts = [...filteredProducts].sort((a,b) => {

    if(sort === "asc") return a.price - b.price
    if(sort == "desc") return b.price - a.price

    return 0
})
}


// pagination
const totalPage = Math.ceil(filteredProducts.length/limit)
const startIndex = (pageNo - 1) * limit
const endIndex = startIndex + limit

const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

useEffect(() => {
  setPageNo(1);
}, [searchval, category, sort]);



  return (
    <div className="product-list">

      <div className="header">
        <h3>Product Listing..</h3>

       <input value = {searchval} onChange={(e) => setsearchval(e.target.value)} placeholder="search by title and category..."/>
       
       <select value={category} name="" id="select-tag" onChange={(e) => setcategory(e.target.value)}>
        <option value="all">Select Category</option>
        <option value="clothing">Clothing</option>
        <option value="accessories">Accessories</option>
        <option value="laptop">Laptop</option>
       </select>

       <select value={sort} name="" id="select-tag" onChange={(e) => setSort(e.target.value)} >
        <option value="">Sort By Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High To Low</option>
       </select>

        <button onClick={() => setOpenModal(true)} className="header-btn">Add</button>
      </div>

      {openModal && <ProductForm productData={productData} setProductData={setProductData} setOpenModal = {setOpenModal} editData = {editData} setEditData = {setEditData}/>}

      <ProductCard  productData={paginatedProducts} setProductData={setProductData} editData = {editData} setEditData = {setEditData} setOpenModal={setOpenModal}/>

       <PaginationComponent pageNo = {pageNo}  setPageNo = {setPageNo} totalPage = {totalPage} setlimit={setlimit} limit ={limit}/>


    </div>
  )
}

export default ProductList