import * as P from './Profile.styles'
import avatar from '../../../assets/avatar.jpg'

export interface ProfileProps {
  name: string
  description: string
  id: number

}

function Profile (props:ProfileProps) {


  return <P.Wrapper tabIndex={0} to = {`/editores/${props.id}`} >
    <P.UserAvatar src= {avatar} />
    <P.UserInfo>
      <P.UserName> {props.name} </P.UserName>
      <P.UserDescription> {props.description} </P.UserDescription>
    </P.UserInfo>
  </P.Wrapper>
}

export default Profile