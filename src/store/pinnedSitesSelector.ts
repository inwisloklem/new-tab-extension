import {AppState} from 'interfaces/AppState'

export function pinnedSitesSelector(state: AppState) {
  return state.pinnedSites.sites
}
