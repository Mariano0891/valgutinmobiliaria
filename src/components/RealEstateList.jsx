import { PreviewCard } from "./PreviewCard"


export const RealEstateList = ({propertyList}) => {
    console.log(propertyList)
  return (
    <div className="flex flex-wrap">
      {propertyList.map(item=> <PreviewCard key={item.id} {...item} />)}
    </div>
  )
}
