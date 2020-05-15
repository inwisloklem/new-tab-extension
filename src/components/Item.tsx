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

const Link = styled.a`
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

interface Props {
  isPinned?: boolean
  site: TopSite
  moveToPinnedSites: (site: TopSite) => void
}

const Item: FunctionComponent<Props> = ({isPinned, moveToPinnedSites, site}) => {
  const {color, title, url} = site

  return (
    <Link color={color} href={url} rel='noopener noreferrer'>
      <Pin isActive={isPinned} onClick={isPinned ? undefined : () => moveToPinnedSites(site)} />
      <Text>{title}</Text>
    </Link>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    moveToPinnedSites(site: TopSite): void {
      dispatch({
        type: ActionType.MOVE_SITE_FROM_TOP_SITES_TO_PINNED_SITES,
        payload: site,
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(Item)
