import { useState } from "react"
import useProducts from "../hooks/useProducts"


const hocFiltertProducts = (Component) => {
    

    return function () {
       const { products, loading } = useProducts()
       const [query, setQuery] = useState("")

       const changeInput = (event) => {
        setQuery(event.target.value.toLowerCase())
       }

       const search = () => {
        const filtertProducts = products.filter((product) =>{
           return product.name.toLowerCase().includes(query)
        })
        
        return filtertProducts
       }

        return(
          <>
          <div>
            <input type="text" placeholder="Buscar ..." onChange={changeInput}/>
          </div>
            <Component products={search()} />
          </>
        )
    }

}

export default hocFiltertProducts