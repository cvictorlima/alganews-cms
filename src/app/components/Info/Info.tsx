import Icon from '@mdi/react'
import { mdiInformation  } from '@mdi/js'
import * as I from './Info.styles'

export interface InfoProps {
  title: string
  description: string
}

export default function Info (props:InfoProps) {
  return <I.Wrapper>
    <I.InnerContent>
      <I.InfoIcon>
        <Icon
          color= "#09f"
          size= "48px"
          path= {mdiInformation}
        />
      </I.InfoIcon>
      <I.Messages>
        <I.Title>{props.title} </I.Title>
        <I.Description>{props.description} </I.Description>
      </I.Messages>
    </I.InnerContent>
  </I.Wrapper>
}