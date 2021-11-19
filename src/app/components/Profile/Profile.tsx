import * as P from './Profile.styles'
import avatar from '../../../assets/avatar.jpg'

export interface ProfileProps {
  name: string
  description: string

}

function Profile (props:ProfileProps) {


  return <P.Wrapper>
    <P.UserAvatar src= {avatar} />
    <P.UserInfo>
      <P.UserName> {props.name} </P.UserName>
      <P.UserDescription> {props.description} </P.UserDescription>
    </P.UserInfo>
  </P.Wrapper>
}

export default Profile