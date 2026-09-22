import{useRef} from 'react'
export default function Calculate(){
    let numref = useRef()
    let numbref = useRef()
    let msgref=useRef()

    let calculate=(operation)=>
    {
        let num1 =Number( numref.current.value)
        let num2 = Number(numbref.current.value)
        let result 
        if(operation=="sum"){
            result=num1+num2
        }
        else if(operation=="sub"){
            result=num1-num2
        }
        else if(operation=="mul"){
            result=num1*num2
        }
        else if(operation=="div"){
            result=num1 / num2
        }
        msgref.current.innerHTML ="Answer="+result
        numref.current.value = ""
        numbref.current.value = ""


    }
    return(
        <div  >
            <table>
            <lable>enter  number </lable>
            <br></br>
            <input type='text' ref={numref} className=' border-2'></input>
            <br></br>
           
              <input type='text' ref={numbref} className='border-2'></input>
              <br></br>
              <div className="flex gap-5 bg-blue-200 ">
              <input className='border-2' type="button" value="sum" onClick={()=>calculate("sum")}></input>
              <input  className='border-2'type="button" value="sub" onClick={()=>calculate("sub")}></input>
              <input  className='border-2'type="button" value="mul" onClick={()=>calculate("mul")}></input>
              <input className='border-2' type="button" value="div" onClick={()=>calculate("div")}></input>
              </div>

              
              <p ref={msgref} className='font-bold text-2x1'></p>
              </table>
        </div>
    )
}