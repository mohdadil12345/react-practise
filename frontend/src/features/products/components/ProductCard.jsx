
import { useEffect } from "react"
import "../../../styles/productcard.scss"

const ProductCard = ({ productData, setProductData }) => {

  return (
    <>

      <div className="prod-card">
        {productData?.map((ele) => (
          <div className="prod-item">
            <h3>Title :{ele.title}</h3>

            <div className="img-div">
                <img src={ele.image} alt="" />
            </div>
          
            <p>Category : {ele.category}</p>
            <p>Stock : {ele.stock}</p>
            <p>Price : {ele.price}</p>
            <p>Rating : {ele.rating}</p>

            <div className="action-btn">
              <button>Edit</button>
              <button>Delete</button>
            </div>

          </div>
        ))}
      </div>

    </>
  )
}

export default ProductCard