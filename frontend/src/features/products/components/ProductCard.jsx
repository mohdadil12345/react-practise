
import { useEffect } from "react"
import "../../../styles/productcard.scss"

const ProductCard = ({ productData, setProductData, editData, setEditData, setOpenModal }) => {


// edit
const handle_edit = (ele) => {
  setEditData({...ele})
   setOpenModal(true)

}


// handle_delete
const handle_delete = (id) => {
    let filter_data = productData.filter((ele) => ele.id !== id)
    setProductData(filter_data)
}


  return (
    <>

      <div className="prod-card">
        {productData?.length == 0 ? <h3>No Products Available.....</h3> : productData?.map((ele) => (
          <div key={ele.id} className="prod-item">
            <h3>Title :{ele.title}</h3>

            <div className="img-div">
                <img src={ele.image} alt="" />
            </div>
          
            <p>Category : {ele.category}</p>
            <p>Stock : {ele.stock}</p>
            <p>Price : {ele.price}</p>
            <p>Rating : {ele.rating}</p>

            <div className="action-btn">
              <button onClick={() => handle_edit(ele)}>Edit</button>
              <button onClick={() => handle_delete(ele.id)}>Delete</button>
            </div>

          </div>
        ))}
      </div>

    </>
  )
}

export default ProductCard