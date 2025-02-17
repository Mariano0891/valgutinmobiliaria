import { useState } from "react"


export const FrontFilter = ({propertyList}) => {

  const salesList = propertyList.filter(property => property.transaction == "venta")

  const propertyByTransaction = Object.groupBy(propertyList, property => property.transaction)

  const propertiesForSaleByType = Object.groupBy(propertyByTransaction.venta, property => property.type)

  {/*const typeCount = propertyList.reduce((acum, property) => {
    return !acum[property.type]
    ? {...acum, [property.type] : 1 } :
      {...acum, [property.type] : acum[property.type] +1 }
    }, {})*/}

    /* using the React-Select component, execute with onChange the filtration of options in the rest of the selection boxes. 
    use useState to set the props of each level of filtration*/

  console.log(propertiesForSaleByType)

  const [gallery, setGallery] = useState("sales")

  const showGallery = (gallery) => {
    setGallery(gallery)
  }

  return (
    <div className='w-9/12 m-auto overflow-hidden px-2'>
      {/*Selection tab*/}
      <div className='bg-two/90 border-two/90 border-2 h-[40px] w-3/6 md:w-3/5 flex border-b-0'>
        <div onClick={() => showGallery("sales")} data-gallery={gallery==="sales"} className='w-1/3 h-full flex justify-center items-center data-[gallery="false"]:bg-white data-[gallery="false"]:cursor-pointer mx-1'>
          <p>VENTAS</p>
        </div>
        <div onClick={() => showGallery("rent")} data-gallery={gallery==="rent"} className='w-1/3 h-full flex justify-center items-center data-[gallery="false"]:bg-white data-[gallery="false"]:cursor-pointer mx-1'>
          <p>ALQUILERES</p>
        </div>
        <div onClick={() => showGallery("temp")} data-gallery={gallery==="temp"} className='w-1/3 h-full flex justify-center items-center data-[gallery="false"]:bg-white data-[gallery="false"]:cursor-pointer mx-1'>
          <p>ALQ. TEMPORARIOS</p>
        </div>
      </div>
      <div className='w-full p-2 bg-two/90 m-auto flex flex-wrap place-content-around'>
          <div className='my-1'>
            <label htmlFor="type">
              <select name="type" id="type">
            
              </select>
            </label>
          </div>
          <div className='my-1'>
            <label htmlFor="transaction">
              <input type="text" />
            </label>
          </div>
          <div className='my-1'>
            <label htmlFor="transaction">
              <input type="text" />
            </label>
          </div>
          <div className='my-1'>
            <label htmlFor="transaction">
              <input type="text" />
            </label>
          </div>
      </div>
    </div>
  )
}
