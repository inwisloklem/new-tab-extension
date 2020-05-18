import {ActionType} from 'store/actionTypes'
import {Action} from 'store/actions'
import {AppState} from 'interfaces/AppState'
import {move} from 'utils/move'

const initialState = {
  sites: [],
}

type State = AppState['pinnedSites']

export function pinnedSitesReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionType.ADD_SITE_TO_PINNED_SITES: {
      return {
        ...state,
        sites: [...state.sites, action.payload],
      }
    }
    case ActionType.REORDER_PINNED_SITES: {
      return {
        ...state,
        sites: move(state.sites, action.payload.oldIndex, action.payload.newIndex),
      }
    }
    case ActionType.REMOVE_SITE_FROM_PINNED_SITES: {
      return {
        ...state,
        sites: state.sites.filter(site => site.url !== action.payload.url),
      }
    }
    default: {
      return state
    }
  }
}
