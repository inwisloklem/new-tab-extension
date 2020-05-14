import {ActionType} from 'store/actionTypes'
import {TopSite} from 'interfaces/TopSite'

interface AddSiteToPinnedSites {
  type: ActionType.ADD_SITE_TO_PINNED_SITES
  payload: TopSite
}

interface MoveSiteFromTopSitesToPinnedSites {
  type: ActionType.ADD_SITE_TO_PINNED_SITES
  payload: TopSite
}

interface RemoveSiteFromTopSites {
  type: ActionType.REMOVE_SITE_FROM_TOP_SITES
  payload: TopSite
}

interface SetTopSites {
  type: ActionType.SET_TOP_SITES
  payload: TopSite[]
}

export type Action =
  | AddSiteToPinnedSites
  | MoveSiteFromTopSitesToPinnedSites
  | RemoveSiteFromTopSites
  | SetTopSites
