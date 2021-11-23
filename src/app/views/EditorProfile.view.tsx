import { useEffect } from "react"
import { useParams } from "react-router"
import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default/Default.layout"
import EditorProfile from "../features/EditorProfile";
import ErrorBoundary from "../components/ErrorBoundary";

export default function UserView () {

  const { userId } = useParams ();

  usePageTitle(`Editor ${userId}`)
  
  useEffect(()=>{
    console.log(userId)
  },[]) //eslint-disable-line

  return <DefaultLayout>
    <ErrorBoundary>
      <EditorProfile userId= {Number(userId)} />    
    </ErrorBoundary>
  </DefaultLayout>
}