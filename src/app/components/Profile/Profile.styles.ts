import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;

  transition: box-shadow .15s ease;
  text-decoration: none;
  color: #274060;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 0 5px #09f;
    border-color: #09f;
  }

`

export const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const UserName = styled.h3`
  font-size: 18px;
`

export const UserDescription = styled.div`
  font-size: 12px;
`