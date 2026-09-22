export default function Service(props){
   
    
   
    return(
        <>        
        <div className="flex  flex-col w-1/4 border-gray-400 text-center p-2">
            <div className="text-lg font-bold">{props.name}</div>
            <div className="text-sm pt-2">{props.des}</div>
            
              
        </div>
        </>

    )

}
