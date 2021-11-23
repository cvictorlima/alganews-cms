import styled from "styled-components";
import { Editor } from "../../core/utils/Editors";
import Profile from "../components/Profile";

export default function EditorsList () {


  return <EditorsListWrapper>
    {
      Editor.map((E)=> <Profile id= {E.id} name= {E.name} description= {E.preview} key= {E.id} /> )
    }
    {/* <Profile name= 'Logan' description= 'dog desde sempre' id= {1} />
    <Profile name= 'Billy' description= 'dog desde sempre' id= {2} />
    <Profile name= 'Pinguelo' description= 'dog desde sempre' id= {3} />
    <Profile name= 'Xurileisco' description= 'dog desde sempre' id= {4} />
    <Profile name= 'Apa' description= 'dog desde sempre' id= {5} /> */}
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px
`