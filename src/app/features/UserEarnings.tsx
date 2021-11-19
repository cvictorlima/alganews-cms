import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings () {


  return <UserEarningsWrapper>
    <ValueDescriptor color= 'primary' description= 'ganhos no mes' value={560322.02} isCurrency  />
    <ValueDescriptor color= 'primary' description= 'ganhos na semana' value={560322.02} isCurrency  />
    <ValueDescriptor color= 'default' description= 'ganhos de sempre' value={560322.02} isCurrency  />
    <ValueDescriptor color= 'default' description= 'total de palavras' value={2_654_541} />
  </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px
`
