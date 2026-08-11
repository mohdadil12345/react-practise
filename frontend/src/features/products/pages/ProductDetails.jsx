import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
  const { id } = useParams()

  let [singleData, setSingleData] = useState(null)

  useEffect(() => {

    let lsData = JSON.parse(localStorage.getItem("prod-data"))
    let fil_data = lsData.find((item) => item.id == id)

    if (fil_data) {
      setSingleData(fil_data)
    }

  }, [id])

  return (
    <div>

      {singleData ?
        <>
          <h2>{singleData.title}</h2>
          <img src={singleData?.image} alt="" />
          <p>{singleData.price}</p>
          <p>{singleData.category}</p>
          <p>{singleData.rating}</p>
        </>
        :
        <h4>Products Not Found........</h4>
      }
    </div>
  )
}

export default ProductDetails