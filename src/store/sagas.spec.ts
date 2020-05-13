import {ActionType} from 'store/actionTypes'
import {call, put} from 'redux-saga/effects'
import {getTopSites} from 'api'
import {setTopSitesAsync} from 'store/sagas'

describe('setTopSitesAsync', () => {
  const gen = setTopSitesAsync()
  const topSites = [{title: 'Web Store', url: 'https://chrome.google.com/webstore/'}]

  test('should call an API to get top sites list then dispatch SET_TOP_SITES action', () => {
    expect(gen.next(topSites).value).toEqual(call(getTopSites))
    expect(gen.next(topSites).value).toEqual(
      put({type: ActionType.SET_TOP_SITES, payload: topSites})
    )
    expect(gen.next().done).toBeTruthy()
  })
})
