 
const products =[
    {
      id: "zp1",
      name:"Air Jordan 1 Low Cratf",
      description:"Zapatilla Jordan",
      image:"/public/img/cat-nike1.jpg",
      price: 180,
      stock:10,
      category:"calzado"
    },
    {
      id: "zp2",
      name:"Nike Air Max Dn",
      description:"Zapatilla de Moda ",
      image:"/public/img/cat-nike2.jpg",
      price: 140,
      stock:10,
      category:"calzado"
    },
    {
      id: "zp3",
      name:"Nike Metcon 9",
      description:"Zapatilla de Entrenamiento",
      image:"/public/img/cat-nike3.jpg",
      price: 200,
      stock:10,
      category:"calzado"
    },
    {
      id: "rp1",
      name:"ropa Nike",
      description:"Buzo con Capucha de Entrenamiento para Hombre",
      image:"/public/img/ropa-nike1.jpg",
      price: 85,
      stock:10,
      category:"ropa"
    },
    {
      id: "rp2",
      name:"ropa Nike",
      description:"Buzo con Capucha de Moda para Hombre",
      image:"/public/img/ropa-nike2.jpg",
      price: 70,
      stock:10,
      category:"ropa"
    },
    {
      id: "rp3",
      name:"ropa Nike",
      description:"Buzo con Capucha de Moda Hombre",
      image:"/public/img/ropa-nike3.jpg",
      price: 60,
      stock:10,
      category:"ropa"
    },
    {
      id: "acc1",
      name:"Accesorio Nike",
      description:"Botella de Entrenamiento Unisex",
      image:"/public/img/accesorios1.jpg",
      price: 30,
      stock:10,
      category:"accesorio"
    },
    {
      id: "acc2",
      name:"Accesorio Nike",
      description:"Pelota de Fútbol Unisex",
      image:"/public/img/accesorios2.jpg",
      price: 45,
      stock:10,
      category:"accesorio"
    },
    {
      id: "acc3",
      name:"Accesorio Nike",
      description:"Riñonera de Running Unisex",
      image:"/public/img/accesorios3.jpg",
      price: 25,
      stock:10,
      category:"accesorio"
    },
  
  
  ]
  
      const getProducts = () => {
    
     return new Promise((resolve, reject) => {
      setTimeout(() =>{ 
       resolve(products)
     },1000)
     
  })

}

export { getProducts }