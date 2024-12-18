import  "./itemdetail.css"

const ItemDetail = ({product}) => {
    return (
        <div className="item-detail">
        <div className="img-detail-container">
          <div className="secondary-img">
          </div>
          <div className="main-img">
            <img src={product.image} alt="" />
          </div>
        </div>
  
        <div className="detail-container">
          <h2 className="title">{product.name}</h2>
          <p className="text">{product.description}</p>
          <p className="text">Precio: ${product.price}</p>
        </div>
      </div>
      )
}

export default ItemDetail