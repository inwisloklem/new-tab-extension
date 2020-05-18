import React, {FunctionComponent} from 'react'
import {SortableContainer, SortableElement, SortEnd} from 'react-sortable-hoc'
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
  onSortEnd?: ({oldIndex, newIndex}: SortEnd) => void
}

interface SortableElementProps {
  value: TopSite
}

const Block: FunctionComponent<Props> = ({isPinned, sites = [], onSortEnd, title}) => {
  if (sites.length === 0) {
    return null
  }

  const SortableItem = SortableElement(({value}: {value: TopSite}) => (
    <Item isPinned={isPinned} key={value.url} site={value} />
  ))
  const SortableTable = SortableContainer(({items}: {items: TopSite[]}) => (
    <Table>
      {items.map((value: TopSite, index: number) => (
        <SortableItem index={index} key={value.url} value={value} />
      ))}
    </Table>
  ))

  return (
    <Section>
      <Title>{title}</Title>

      {onSortEnd ? (
        <SortableTable axis='xy' items={sites} pressDelay={200} onSortEnd={onSortEnd} />
      ) : (
        <Table>{sites.map(site => <Item isPinned={isPinned} key={site.url} site={site} />)}</Table>
      )}
    </Section>
  )
}

export default Block
