import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
const ProductItem = ({id,image,name,price}) => {

    const {currency } =useContext(ShopContext)
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
            <img className="hover:scale-110 trasition ease-in-out" src={image[0]} alt="" />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p  className="text-sm font-medium">{currency}{price}</p>
    </Link>
  )
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired, // Validate that id is a required string
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate that image is an array of strings
  name: PropTypes.string.isRequired, // Validate that name is a required string
  price: PropTypes.number.isRequired, // Validate that price is a required number
};


export default ProductItem