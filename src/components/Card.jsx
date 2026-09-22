export default function Card(props){
    let name=props.pname
    let age=props.age
    let status="Eligible"
    let clsname="bg-green-400"
    if(age<18){
        status="Not Eligible"
        clsname="bg-red-400"
    }
    return(
        <div className={'flex flex-col gap-2 w-200px border-2 text-center align-middle'+clsname}>
            <div>{name}</div>
             <div>{age}</div>
              <div>{status}</div>
        </div>
    )

}
