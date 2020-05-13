import React, {FunctionComponent} from 'react'
import {TopSite} from 'interfaces/TopSite'
import Pin from 'components/Pin'
import styled from 'styled-components'

interface LinkProps {
  color: string
}

const Link = styled.a<LinkProps>`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.color};
  border: none;
  border-radius: 0.25rem;
  color: var(--color-text);
  font-size: 16px;
  text-decoration: none;
`

const Text = styled.div`
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

type Props = TopSite

const TopSitesBlock: FunctionComponent<Props> = ({color, title, url}) => (
  <Link color={color} href={url} rel="noopener noreferrer">
    <Pin />
    <Text>{title}</Text>
  </Link>
)

export default TopSitesBlock
