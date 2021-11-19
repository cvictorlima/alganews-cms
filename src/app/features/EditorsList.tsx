import styled from "styled-components";
import Profile from "../components/Profile";

export default function EditorsList () {


  return <EditorsListWrapper>
    <Profile name= 'Logan' description= 'dog desde sempre' />
    <Profile name= 'Logan' description= 'dog desde sempre' />
    <Profile name= 'Logan' description= 'dog desde sempre' />
    <Profile name= 'Logan' description= 'dog desde sempre' />
    <Profile name= 'Logan' description= 'dog desde sempre' />
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px
`