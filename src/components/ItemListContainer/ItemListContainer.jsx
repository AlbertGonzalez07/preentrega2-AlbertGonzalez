import hocFiltertProducts from "../../hoc/hocFilterProducts"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"
import { useState,  useEffect } from "react"
import { getProducts } from "../../data/data.js"


const ItemListContainer = ({ greeting}) => {
 const [products, setProducts] = useState([])

  const {idCategory}= useParams()

  useEffect(() =>{
    getProducts()
    .then((data) =>{
      if(idCategory){
        const filterProducts = data.filter((product) => product.category === idCategory )
        setProducts(filterProducts)
      }else{
        setProducts(data)
      }
    })
    .catch((error) =>{
      console.error(error)
    })
     .finally(() =>{
      console.log("termino la promesa")
    })
  },[idCategory])
  
return (
    <div className="itemlistcontainer">
        <h1>{greeting}</h1>
       <ItemList products={products} />
    </div>
  )
}

//export default ItemListContainer

const ItemListContainerWithHoc = hocFiltertProducts (ItemListContainer)

export default ItemListContainerWithHoc