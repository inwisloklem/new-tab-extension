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
    case ActionType.REMOVE_SITE_FROM_TOP_SITES: {
      return {
        ...state,
        sites: state.sites.filter(site => site.url !== action.payload.url),
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
