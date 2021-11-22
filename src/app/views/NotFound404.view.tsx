import usePageTitle from "../../core/hooks/usePageTitle"
import notFound from '../../assets/not_found.svg'
import Button from "../components/Button/Button"
import styled from "styled-components"
import { useNavigate } from "react-router"

export default function NotFound () {
  const navigate = useNavigate();

function handleClick () {
  navigate('/')
}

  usePageTitle('404: Not Found')

  return <NotFoundWrapper>
    <span>
      Oops!
    </span>
    <h1>Não encontramos esta página</h1>
    <img src={notFound} alt="Não encontrado" />
    <Button 
      label="Ir para a home" 
      variant= 'primary' 
      onClick = {handleClick}
      />
  </NotFoundWrapper>
}

const NotFoundWrapper = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 32px;

  span{
    font-size: 72px;
  }

  h1{
    font-size: 18px;
    font-weight: 500;
  }
`