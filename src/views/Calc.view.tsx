import { useEffect } from "react"
import { useLocation, useParams } from "react-router"

function useQuery () {
  return new URLSearchParams(useLocation().search)
}


export default function Calc () {
  const {a, b} = useParams()
  const query = useQuery ()

  useEffect (()=> {
    console.log (query.get('operation'))
  },[])


  return <div>
    <h1>
      Calc
    </h1>
    <p>Soma - {Number(a) + Number (b)} </p>
  </div>
}