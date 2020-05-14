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
  moveSiteFromTopSitesToPinnedSites: (site: TopSite) => void
  site: TopSite
}

const Block: FunctionComponent<Props> = ({isPinned, moveSiteFromTopSitesToPinnedSites, site}) => {
  console.info(moveSiteFromTopSitesToPinnedSites)
  const {color, title, url} = site

  return (
    <Link color={color} href={url} rel='noopener noreferrer'>
      <Pin onClick={isPinned ? undefined : () => moveSiteFromTopSitesToPinnedSites(site)} />
      <Text>{title}</Text>
    </Link>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  moveSiteFromTopSitesToPinnedSites(site: TopSite): void {
    dispatch({
      type: ActionType.MOVE_SITE_FROM_TOP_SITES_TO_PINNED_SITES,
      payload: site,
    })
  },
})

export default connect(null, mapDispatchToProps)(Block)
