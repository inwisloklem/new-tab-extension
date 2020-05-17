import {ActionType} from 'store/actionTypes'
import {Action} from 'store/actions'
import {AppState} from 'interfaces/AppState'
import {convertToHEX} from 'utils/convertToHEX'

const initialState = {
  sites: [],
}

type State = AppState['topSites']

export function topSitesReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionType.SET_TOP_SITES: {
      const coloredTopSites = action.payload.map(site => ({
        ...site,
        color: convertToHEX(site.url),
      }))

      return {
        ...state,
        sites: coloredTopSites,
      }
    }
    default: {
      return state
    }
  }
}
