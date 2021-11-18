import { useEffect } from "react"
import { useParams } from "react-router"
import DefaultLayout from "../layouts/Default/Default.layout"

export default function UserView () {

  const { userId } = useParams ();

  useEffect(()=>{
    console.log(userId)
  },[]) //eslint-disable-line

  return <DefaultLayout>
    <h1>Usuário
    {
      userId &&
        <>
          {userId}
        </>
    }
    </h1>


    
  </DefaultLayout>
}