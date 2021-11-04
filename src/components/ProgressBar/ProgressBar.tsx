import { transparentize } from "polished";
import styled from "styled-components"

export interface ProgressBarProps {
  title: string
  progress: number
  theme: 'primary' | 'secondary'
  width?: number
}

export default function ProgressBar (props:ProgressBarProps) {
  return <ProgressBarBase style={{ width: props.width||'auto'}}>
  <CurrentProgress className= 'back' progress={props.progress} >{props.title} </CurrentProgress>
  <CurrentProgress className= 'front' progress={props.progress} theme = {props.theme}>{props.title}</CurrentProgress>
  </ProgressBarBase>
}

const COLOR = {
  primary: '#0099FF',
  secondary: '#274060'
}

const ProgressBarBase = styled.div`
  position: relative;
  height: 24px;
  width: 296px;
  position: relative;
  font-size: 14px;
  font-family: 'lato', sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  `

const CurrentProgress = styled.div<{
  theme: 'primary' | 'secondary'
  progress: number
}>
`
position: absolute;
text-indent: 8px;
padding: 4px 0;
overflow: hidden;
text-transform: lowercase;
white-space: nowrap;
display: flex;
&.back {
  width: 100%;
  color: #274060;
  padding: '15px';
  background-color: ${transparentize(0.85, '#244060')};
}
&.front {
  width: ${p=>p.progress}%;
  background-color: ${p=> COLOR[p.theme]};
  padding: '15px';
  color: #fff;
  z-index: 2;
  transition: .25s ease;

  }
`

// const ProgressBartitle = styled.span``