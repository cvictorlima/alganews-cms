import * as P from './Profile.styles'

export interface ProfileProps {
  name: string
  description: string
  id: number
  avatarUrl?: string
}

function Profile (props:ProfileProps) {


  return <P.Wrapper tabIndex={0} to = {`/editores/${props.id}`} >
    <P.UserAvatar src= {props.avatarUrl} />
    <P.UserInfo>
      <P.UserName> {props.name} </P.UserName>
      <P.UserDescription> {props.description} </P.UserDescription>
    </P.UserInfo>
  </P.Wrapper>
}

export default Profile