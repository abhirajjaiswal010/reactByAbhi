import { useContext } from "react"
import { Link } from "react-router-dom"
import { StoreContext } from "./storeContext"

export const Navbar=()=>{
  const{products}=useContext(StoreContext)
  return<>
    <div className="flex flex-row justify-center mt-2 text-lg font-medium gap-20">
      <Link to="/">Home</Link>
      <Link to="/Cart">Cart
      <span className="align-top text-red-600  mx-1 " >{products.length}</span></Link>
       
    </div>
    <h1 className="text-3xl font-medium text-center text-gray-600 my-6">
        useContext + useReducer Store
      </h1>
    </>
    
    
  
}
