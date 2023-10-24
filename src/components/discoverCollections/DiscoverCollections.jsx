import { data } from "./DiscoverCollectionsData"
import './DiscoverCollections.css'

const DiscoverCollections = () => {
  return (
    <div className="DCcontainer">
        {
            data.map((item)=>{
                return(
                    <div key={item.title} className="DCcontainer">
                        <div className="DCitem" >
                            <div className="DCitemImage">
                                {item.image}
                            </div>
                            <h2>{item.title}</h2>
                            <p>View All</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DiscoverCollections