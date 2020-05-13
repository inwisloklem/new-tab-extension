import React, {FunctionComponent} from 'react'
import {ActionType} from 'store/actionTypes'
import {Dispatch} from 'redux'
import {TopSite} from 'interfaces/TopSite'
import {connect} from 'react-redux'
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

interface Props extends TopSite {
  isPinned?: boolean
  removeSiteFromTopSites: (url: string) => void
}

const TopSitesBlock: FunctionComponent<Props> = ({color, isPinned, removeSiteFromTopSites, title, url}) => (
  <Link color={color} href={url} rel="noopener noreferrer">
    <Pin onClick={isPinned ? undefined : () => removeSiteFromTopSites(url) }/>
    <Text>{title}</Text>
  </Link>
)

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeSiteFromTopSites(url: string): void {
    dispatch({
      type: ActionType.REMOVE_SITE_FROM_TOP_SITES,
      payload: url,
    })
  },
})

export default connect(null, mapDispatchToProps)(TopSitesBlock)
