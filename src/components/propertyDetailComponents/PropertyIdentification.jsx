

export const PropertyIdentification = ({property}) => {
  return (
    <div className='bg-five w-full max-w-[700px] flex flex-wrap justify-start md:justify-center p-2 gap-1 items-end'>
        <div className="flex p-1">
            <h3 className='font-bold underline'>TIPO DE INMUEBLE:</h3>
            <p className='pl-2 text-base'>{(property.type).toUpperCase()}</p>
        </div>
        <div className="flex p-1">
            <h3 className='font-bold underline'>OPERACION:</h3>
            <p className='pl-2 text-base'>{(property.transaction).toUpperCase()}</p>
        </div>
        <br></br>
        <div className="flex p-1">
            <h3 className='font-bold underline'>CODIGO:</h3>
            <p className='pl-2 text-base'>{(property.code).toUpperCase()}</p>
        </div>
        {property.creditAb ?
            <div className="flex p-1">
                <h3 className='font-bold underline'>APTO CREDITO:</h3>
                <p className='pl-2 text-base'>SI</p>
            </div> : <div></div>
        }
        <div className="flex p-1 items-end">
            <h3 className='font-bold underline'>PRECIO:</h3>
            {property.price == 0 ?
            <p className='pl-2 text-2xl'>CONSULTAR</p> :
            <div className="flex text-2xl">
                {property.dollar ? <p className='pl-2'>USD</p> : <p className='pl-2'>ARS</p>}
                <p className='pl-1'>{property.price}</p>
            </div>
            }
        </div>
        
    </div>
  )
}
