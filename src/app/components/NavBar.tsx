import { NavLink } from "react-router-dom";
import styled from "styled-components";


export default function Navbar () {

  return <>
    <List>
      <Item>
        <NavLink to="/">início</NavLink>
      </Item>
      <Item>
        <NavLink to="/editores">editores</NavLink>
      </Item>
      <Item>
        <NavLink to="/posts/criar">novo post</NavLink>
      </Item>
      <Item>
        <NavLink to="/usuario">usuário</NavLink>
      </Item>
    </List>
  </>
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 12px;

`

const Item = styled.li`
  text-decoration: none;
  text-transform: lowercase;
  font-size: 18px;


  a {
    text-decoration: none;
    color: #274060;
    
    &.active {
      color: #09f;
    }
  }
  
`