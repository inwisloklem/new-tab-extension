import React, {FunctionComponent, MouseEvent} from 'react'
import {ReactComponent as Bookmark} from 'assets/bookmark.svg'
import styled from 'styled-components'

interface Props {
  isActive?: boolean
}

const Button = styled.button<Props>`
  position: absolute;
  top: -8px;
  right: 0;
  padding: 0;
  width: 28px;
  height: 32px;
  background-color: transparent;
  border: none;
  border-radius: 0;
  opacity: ${props => props.isActive ? 1 : 0.25};
  font-size: 0;
  outline: none;
  cursor: pointer;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 1;
  }
`

const Pin: FunctionComponent<Props> = ({isActive}) => {
  const handleClick = (event: MouseEvent): void => {
    event.preventDefault()
  }

  return (
    <Button isActive={isActive} onClick={handleClick}><Bookmark /></Button>
  )
}

export default Pin
