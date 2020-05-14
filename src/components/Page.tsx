import React, {FunctionComponent} from 'react'
import {AppState} from 'store'
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
  height: 100%;
  background: linear-gradient(to right, var(--color-background-from), var(--color-background-to));
`

interface Props {
  topSites?: TopSite[]
  pinnedSites?: TopSite[]
}

const Page: FunctionComponent<Props> = ({pinnedSites, topSites}) => (
  <Main>
    <Style />
    <Block sites={pinnedSites} title='Pinned sites' />
    <Block sites={topSites} title='Top sites' />
  </Main>
)

const mapStateToProps = (state: AppState) => ({
  pinnedSites: state.pinnedSites.sites,
  topSites: state.topSites.sites,
})

export default connect(mapStateToProps)(Page)
