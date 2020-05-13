import React, {FunctionComponent} from 'react'
import {AppState} from 'store'
import {Style} from 'style'
import {TopSite} from 'interfaces/TopSite'
import {connect} from 'react-redux'
import TopSitesBlock from 'components/TopSitesBlock'
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

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 16rem));
  grid-template-rows: 4rem;
  grid-auto-columns: minmax(0, 16rem);
  grid-auto-rows: 4rem;
  gap: 1rem;
`

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 32px;
  line-height: 1;
  color: var(--color-text);
`

interface Props {
  sites?: TopSite[]
}

const Page: FunctionComponent<Props> = ({sites}) => (
  <Main>
    <Style />
    <Title>Top sites</Title>

    <Table>{sites && sites.map(item => <TopSitesBlock key={item.url} {...item} />)}</Table>
  </Main>
)

const mapStateToProps = (state: AppState) => ({
  sites: state.topSites.sites,
})

export default connect(mapStateToProps)(Page)
