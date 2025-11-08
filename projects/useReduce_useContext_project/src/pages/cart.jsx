import { useContext } from "react"
import { Navbar } from "../components/navbar"
import { StoreContext } from "../components/storeContext"
import { BasketProduct } from "../components/cartProduct"

export const Cart=()=>{
  const{products,total}=useContext(StoreContext)
  return(
        <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Your Cart</h3>
          <p className="text-xl font-medium text-gray-700">Total: ${total}</p>
        </div>

        <div className="grid gap-6">
          {products.map((product, i) => (
            <BasketProduct key={i} item={product} />
          ))}
        </div>
      </div>
    </div>

  )
}
