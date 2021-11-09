import styled from "styled-components";

import {Wrapper as Button} from '../Button/Button.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border: 1px solid #ccc;

  ${Button} {
    cursor: pointer;
  }

`

export const Avatar = styled.img`
height: 48px;
width: 48px;
object-fit: cover;

`

export const Name = styled.h2`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  text-align: center;

`

export const Description = styled.div`
  text-transform: lowercase;
`

