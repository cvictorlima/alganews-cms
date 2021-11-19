import styled from "styled-components";
import CircleChart from "../components/CircleChart";

export default function UserTogTags () {


  return <UserTopTagsWrapper>
    <CircleChart progress={80} theme= 'primary' size={88} caption= 'JavaScript' />
    <CircleChart progress={32} size={88} caption= 'Java' />
    <CircleChart progress={65} size={88} caption= 'iOS' />
  </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px
`
