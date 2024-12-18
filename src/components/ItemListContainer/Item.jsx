import { Link } from "react-router-dom"
const Item = ({product}) => {
  return (
       <div className="item">
         <img src={product.image} width={250} alt="" />
         <p className="text-item">{product.name}</p>
         <p className="text-item">{product.description}</p>
         <p className="text-item">Precio: ${product.price}</p>

        <Link to={"/detail/"+product.id } >ver detalles</Link>
        </div>
    )
}

export default Item