import { PreviewCard } from "./PreviewCard"
import { Link } from 'react-router-dom'


export const HomeScreenPreviews = ({list}) => {

  return (
    <div className="my-4">
        <div className='block text-center uppercase font-bold text-two'>
            <h3 className='text-2xl'>{list[0].transaction}</h3>
        </div>
        <div className="flex flex-wrap">
          {list.slice().reverse().slice(0, 3).map(item=> <PreviewCard key={item.id} {...item} />)}
        </div>
        <Link to={`/transaction/${list[0].transaction}`} className='flex justify-center my-1'>
            <button className='btn text-xl bg-one text-two font-bold hover:text-one w-11/12 max-w-3xl'>VER MAS</button>
        </Link>
    </div>
  )
}
