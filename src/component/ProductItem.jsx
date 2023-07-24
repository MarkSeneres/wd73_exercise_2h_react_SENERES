import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartItemCountReducer"
import { addProductToCart } from "../store/cartReducer";

function ProductItem (props) {
  const { id, title, price, description, category, image} = props
  const dispatch = useDispatch()
  
  function handleClick () {
    dispatch(addToCart())
    dispatch(addProductToCart({
      id,
      title,
      price
    }))
  }

  return (
    <>
     <div className="card" style={{
      width: '18rem'
      }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>         
          <p className="card-text">{description}</p>
          <p className="card-text">{category}</p>
          <button className="btn btn-primary" onClick={handleClick}>Add To Cart</button>
        </div>
      </div>
    </>
  )
}
export default ProductItem