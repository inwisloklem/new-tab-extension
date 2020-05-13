import React, {FunctionComponent, SyntheticEvent} from 'react'
import {ReactComponent as Bookmark} from 'assets/bookmark.svg'
import styled from 'styled-components'

interface ButtonProps {
  isActive?: boolean
}

const Button = styled.button<ButtonProps>`
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

interface Props {
  isActive?: boolean
  onClick?: (event?: SyntheticEvent) => void
}

const Pin: FunctionComponent<Props> = ({isActive, onClick}) => {
  const handleClick = (event: SyntheticEvent): void => {
    event.preventDefault()
    onClick?.()
  }

  return (
    <Button isActive={isActive} onClick={handleClick}>
      <Bookmark />
    </Button>
  )
}

export default Pin
