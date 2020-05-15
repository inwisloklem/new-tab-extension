import React, {FunctionComponent} from 'react'
import {TopSite} from 'interfaces/TopSite'
import Item from 'components/Item'
import styled from 'styled-components'

const Section = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
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
  isPinned?: boolean
  sites?: TopSite[]
  title: string
}

const Block: FunctionComponent<Props> = ({isPinned, sites = [], title}) => {
  if (sites.length === 0) {
    return null
  }

  return (
    <Section>
      <Title>{title}</Title>
      <Table>{sites.map(site => <Item isPinned={isPinned} key={site.url} site={site} />)}</Table>
    </Section>
  )
}

export default Block
