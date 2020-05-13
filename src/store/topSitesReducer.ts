import {ActionType} from 'store/actionTypes'
import {Action} from 'store/actions'
import {AppState} from 'store'
import {convertToHEX} from 'utils/convertToHEX'

const INITIAL_STATE = {
  sites: [],
}

type State = AppState['topSites']

export function topSitesReducer(state: State = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case ActionType.REMOVE_SITE_FROM_TOP_SITES: {
      return {
        ...state,
        sites: state.sites.filter(site => site.url !== action.payload),
      }
    }
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
