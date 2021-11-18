import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import Heading from "./Typography/Heading";

export interface ErrorDisplayProps {
  title?: string
  description?: string
  small: boolean
}

export default function ErrorDisplay (props:ErrorDisplayProps) {


  return <div
    style = {{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '9px'

    }}
  >
    <Icon 
      path = {mdiAlert}
      size = {props.small ? '24px' : '48px' }
      color = {'#274060'}
    />
    <Heading level= {2}> {props.title  || 'Erro ao renderizar componente' } </Heading>
    <span
      style= {{fontSize: '12px', fontFamily: '"Roboto mono", monospace' }}
    > {props.description || 'Erro desconhecido' } </span>
  </div>
}