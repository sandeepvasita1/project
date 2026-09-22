import{useRef} from 'react'
export default function Regeg(){
    let nameref = useRef()
    let msgref =useRef()
    let showmsg =()=>
    {
        let username=nameref.current.value 
        let msg = "welcome"+username
        msgref.current.innerHTML=msg
        nameref.current.value=""
    }
    return(
        <div>
            <lable>Enter name</lable>
            <input type="text" ref={nameref} className='border-2'></input><br></br>
            <input type="button" value="Click here" onClick={()=>showmsg()}></input>
            <p ref={msgref}></p>
        </div>
    )
}