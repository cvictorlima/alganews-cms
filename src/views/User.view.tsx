import { useEffect } from "react"
import { useParams } from "react-router"

export default function UserView () {

  const { userId, key } = useParams ();

  useEffect(()=>{
    console.log(userId)
  },[])

  return <div style= {{display:'flex', gap: '10px'}}>
    <h1>Usuário{userId}</h1>
    {
      key &&
        <h1>chave: {key} </h1>
    }

    
  </div>
}