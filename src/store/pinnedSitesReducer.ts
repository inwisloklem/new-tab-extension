import {ActionType} from 'store/actionTypes'
import {Action} from 'store/actions'
import {AppState} from 'store'

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
    default: {
      return state
    }
  }
}
