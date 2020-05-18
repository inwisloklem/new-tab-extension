import React, {FunctionComponent} from 'react'
import {ActionType} from 'store/actionTypes'
import {AppState} from 'interfaces/AppState'
import {Dispatch} from 'redux'
import {SortEnd} from 'react-sortable-hoc'
import {Style} from 'style'
import {TopSite} from 'interfaces/TopSite'
import {connect} from 'react-redux'
import Block from 'components/Block'
import styled from 'styled-components'

const Main = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
`

interface Props {
  topSites?: TopSite[]
  pinnedSites?: TopSite[]
  reorderPinnedSites: ({oldIndex, newIndex}: SortEnd) => void
}

const Page: FunctionComponent<Props> = ({pinnedSites, reorderPinnedSites, topSites}) => (
  <Main>
    <Style />
    <Block isPinned sites={pinnedSites} title='Pinned sites' onSortEnd={reorderPinnedSites} />
    <Block sites={topSites} title='Top sites' />
  </Main>
)

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    reorderPinnedSites({oldIndex, newIndex}: SortEnd) {
      dispatch({
        type: ActionType.REORDER_PINNED_SITES,
        payload: {oldIndex, newIndex},
      })
    },
  }
}

const mapStateToProps = (state: AppState) => ({
  pinnedSites: state.pinnedSites.sites,
  topSites: state.topSites.sites,
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
