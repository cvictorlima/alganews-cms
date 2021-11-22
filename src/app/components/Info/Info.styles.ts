import { transparentize } from 'polished';
import styled from "styled-components"

export const Wrapper = styled.div`
  padding:24px;
  background-color: #F3F8FA;
  display: flex;
  align-items:center;
  justify-content: center;
  width: 373px;
  border: 1px solid ${transparentize(0.9, '#274060')};

`

export const InfoIcon = styled.div`

`

export const InnerContent = styled.div`
  display:flex;
  gap:24px;
  color: #274060;

`

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;

`

export const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #274060;
  width: 261px;

`

// no lugar dessa estilização, poderia ser
// usado o Paragraph criado anteriormente,
// mas o espaçamento entre linhas dele não é 
// compatível 