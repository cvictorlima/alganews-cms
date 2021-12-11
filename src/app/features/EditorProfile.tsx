import styled from "styled-components"
import { Editor } from "../../core/utils/Editors"
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor"
import Profile from "../components/Profile"
import ProgressBar from "../components/ProgressBar/ProgressBar"
import Paragraph from "../components/Typography/Paragraph"
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor"

interface EditorProfileProps {
  userId: number
  hidePersonalData?: boolean
}

export default function EditorProfile (props:EditorProfileProps) {
var array = [1]
Editor.map((E)=> {
  array.push(E.id)
  if (E.id === props.userId)
    return E
})
const selectedEditor = Editor[props.userId-1]

if (array.includes(props.userId))
  return <Wrapper>
            <Profile id={selectedEditor.id} name= {selectedEditor.name} description={selectedEditor.preview} key= {selectedEditor.id} />  
            <InfoWrapper>
              <ProfileWrapper>
                <Paragraph> {selectedEditor.description} </Paragraph>
                <ProgressBar 
                title= {Object.keys(selectedEditor.skills)[0]} 
                theme='primary' 
                progress= {Object.values(selectedEditor.skills)[0]} 
                />
                <ProgressBar 
                title= {Object.keys(selectedEditor.skills)[1]} 
                theme='primary' 
                progress= {Object.values(selectedEditor.skills)[1]} 
                />
                <ProgressBar 
                title= {Object.keys(selectedEditor.skills)[2]} 
                theme='primary' 
                progress= {Object.values(selectedEditor.skills)[2]} 
                />
              </ProfileWrapper>
              <FieldsWrapper>
                <div style= {{display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <FieldDescriptor field= 'cidade:' value= {selectedEditor.cidade} />
                <FieldDescriptor field= 'estado:' value= {selectedEditor.estado} />
                </div>
                {
                  !props.hidePersonalData && <>
                    <FieldDescriptor field= 'celular:' value= {selectedEditor.celular} />
                <FieldDescriptor field= 'email:' value= {selectedEditor.email} />
                <FieldDescriptor field= 'data de nascimento:' value= {selectedEditor.nascimento} />
                  </>
                  
                }
                
              </FieldsWrapper>
            </InfoWrapper>
            {
              !props.hidePersonalData && <ValuesWrapper>
              <ValueDescriptor color= 'default' description= 'palavras nesta semana:' value= {20354} />
              <ValueDescriptor isCurrency color= 'primary' description= 'ganhos na semana:' value= {203.54} />
              <ValueDescriptor color= 'default' description= 'palavras no mês:' value= {140854} />
              <ValueDescriptor isCurrency color= 'primary' description= 'ganhos no mês:' value= {1408.54} />
              <ValueDescriptor color= 'default' description= 'total de palavras:' value= {12484356} />
              <ValueDescriptor isCurrency color= 'primary' description= 'ganhos sempre:' value= {124843.56} />
            </ValuesWrapper>
            }
          </Wrapper>
else 
  throw new Error ('Perfil não encontrado')
    // return <div style= {{ display: 'flex', justifyContent: 'center'}}>
    //   <Info title= 'Perfil não encontrado' description= 'Este perfil de editor não existe' />
    // </div>
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const InfoWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 24px;

`
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ValuesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:16px
`