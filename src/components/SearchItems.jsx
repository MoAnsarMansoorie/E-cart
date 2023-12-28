import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { items } from "./Data"
import Product from "./Product"


function SearchItems() {
  const {term} = useParams()
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    const filterHandle = () => {
      const element = items.filter((pro) => pro.title.toLowerCase().includes(term.toLowerCase()))
      // console.log(element);
      setFilterData(element)
    }

    filterHandle()
  },[term])
  
  return (
    <>
      <Product items={filterData}/>
    </>
  )
}

export default SearchItems
