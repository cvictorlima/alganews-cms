import Button from '../Button/Button'
import * as C from './Confirm.styles'

export interface ConfirmProps {
  question: string
  onConfirm: () => any
  onCancel: () => any
}

export default function Confirm (props: ConfirmProps) {
  return <C.Wrapper>
    <C.Question>{props.question}</C.Question>
    <C.ButtonWrapper>
      <Button variant= 'danger' label= 'Não' onClick= {props.onCancel} />
      <Button variant= 'primary' label= 'Sim' onClick= {props.onConfirm} />
    </C.ButtonWrapper>
    
  </C.Wrapper>
}
