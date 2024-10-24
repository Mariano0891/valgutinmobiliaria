


export const Description = ({property}) => {

const newDescription = (property.description).split("//")

  return (
    <div className="bg-five w-full max-w-[700px]">
        <h3 className='p-4 font-bold'>DESCRIPCION</h3>
        {newDescription.map((string, index) => (
         <p className='px-4 py-2'>{newDescription[index]}</p>
        ))}
    </div>
  )
}
