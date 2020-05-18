import {move} from 'utils/move'

describe('move', () => {
  test('correctly moves an element', () => {
    expect(move(['a', 'b', 'c'], 0, 2)).toEqual(['b', 'c', 'a'])
  })
})
