

export const PropertyIdentification = ({property}) => {
  return (
    <div className='bg-five w-full max-w-[700px] flex flex-wrap justify-start md:justify-center p-4 gap-1'>
        <div className="flex border-2 p-1">
            <h3 className='font-bold'>TIPO DE INMUEBLE:</h3>
            <p className='pl-2 text-base'>{(property.type).toUpperCase()}</p>
        </div>
        <div className="flex border-2 p-1">
            <h3 className='font-bold'>OPERACION:</h3>
            <p className='pl-2 text-base'>{(property.transaction).toUpperCase()}</p>
        </div>
        <br></br>
        <div className="flex border-2 p-1">
            <h3 className='font-bold'>CODIGO:</h3>
            <p className='pl-2 text-base'>{(property.code).toUpperCase()}</p>
        </div>
        {property.creditAb ?
            <div className="flex border-2 p-1">
                <h3 className='font-bold'>APTO CREDITO:</h3>
                <p className='pl-2 text-base'>SI</p>
            </div> : <div></div>
        }
        <div className="flex border-2 p-1 text-3xl">
            <h3 className='font-bold'>PRECIO:</h3>
            {property.price == 0 ?
            <p className='pl-2 text-base'>CONSULTAR</p> :
            <div className="flex">
                {property.dollar ? <p className='pl-2'>USD</p> : <p className='pl-2'>ARS</p>}
                <p className='pl-1'>{property.price}</p>
            </div>
            }
        </div>
        
    </div>
  )
}
