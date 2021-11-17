import usePageTitle from "../hooks/usePageTitle"

export default function NotFound () {

  usePageTitle('404: Not Found')

  return <div>
    <h1>Not Found 404</h1>
    <p>Página não encontrada</p>
  </div>
}