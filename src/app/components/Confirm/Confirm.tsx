import Button from '../Button/Button'
import * as C from './Confirm.styles'

export interface ConfirmProps {
  question: string
}

export default function Confirm ({question}: ConfirmProps) {
  return <C.Wrapper>
    <C.Question>{question}</C.Question>
    <C.ButtonWrapper>
      <Button variant= 'danger' label= 'Não' />
      <Button variant= 'primary' label= 'Sim' />
    </C.ButtonWrapper>
    
  </C.Wrapper>
}
