import {ActionType} from 'store/actionTypes'
import {Action} from 'store/actions'
import {AppState} from 'store'
import {convertToHEX} from 'utils/convertToHEX'

const INITIAL_STATE = {
  sites: [],
}

export function topSitesReducer(
  state: AppState['topSites'] = INITIAL_STATE,
  action: Action.SetTopSites
) {
  switch (action.type) {
    case ActionType.SET_TOP_SITES: {
      const coloredTopSites = action.payload.map(topSite => ({
        ...topSite,
        color: convertToHEX(topSite.url),
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
