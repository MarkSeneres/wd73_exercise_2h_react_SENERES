import { useEffect, useState } from "react"
import ProductItem from "../component/ProductItem"
import { useSelector } from "react-redux"

function ProductGallery() {
  const [ product, setProducts ] = useState([])
  const cartItemCount = useSelector(state => state.cartItemCount)

  
  useEffect(() => {
    document.title = 'Products'
  }, [])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json ())
      .then(data => {     
        setProducts(data)
    })
  }, [setProducts])
   
  
  return (
    <>
    <h3 className="float-end">Cart Item: <span className="fw-bold">{cartItemCount}</span></h3>
     <div className="container">
       <div className="d-flex flex-wrap m-3  ">
          {
            product.map(
              data => <ProductItem
                key={data.id}
                id={data.id}
                title={data.title} 
                price={data.price} 
                description={data.description}
                category={data.category}
                image={data.image}
              />
            )
          }
        </div>
      </div>
    </>
  )
}

export default ProductGallery