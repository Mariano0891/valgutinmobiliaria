import { PreviewCard } from "./PreviewCard"


export const RealEstateList = ({propertyList}) => {
  return (
    <div className="flex flex-wrap">
      {propertyList.map(item=> <PreviewCard key={item.id} {...item} />)}
    </div>
  )
}
