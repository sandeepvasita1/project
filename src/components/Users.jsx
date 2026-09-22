import user1 from "../assets/images/user1.jpeg"
import user2 from "../assets/images/user2.jpeg"

export default function Users(){
    let usersAry=[
        {name:"sandeep",education:"BCA",img:user1},
        {name:"mohan",education:"MCA",img:user2},
         {name:"pranav",education:"Bcom",img:user1},
        {name:"moksh",education:"BBA",img:user2}

    ]
    let userUI=usersAry.map((u)=>{
        return <div className="flex flex-col gap-2 w-1/5 align-middle content-center items-center text-center">
            <img src={u.img} className="w-4/5 aspect-square rounded-full border-3 border-black-100"></img>
            <div className="font-bold text-lg">{u.name}</div>
            <div className="text-md">{u.education}</div>
        </div>
    
    })
    return(
        <div className="flex flex-wrap gap-5 justify-center">{userUI}</div>
    )
}