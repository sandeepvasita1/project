import { useParams } from "react-router-dom"
import { services } from "../data"
export default function Service(){
    let params=useParams()
    let id=params.id
    let service=services.find((s)=>s.id==id)
   
    
   
    return(
        <>        
        <div className="w-1/2 h-1/2 flex gap-50 p-2">
        <div>
            <div className="text-sm pt-2">{service.name}</div>
            <div className="text-sm pt-2">{service.description}</div>
            <div className="text-sm pt-2">{service.price}</div>
            </div>
            <div className="">
                <img src={service.image}/>
                </div>
              
        </div>
        </>

    )

}
