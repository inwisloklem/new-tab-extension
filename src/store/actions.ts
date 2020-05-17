import {ActionType} from 'store/actionTypes'
import {TopSite} from 'interfaces/TopSite'

interface AddSiteToPinnedSites {
  type: ActionType.ADD_SITE_TO_PINNED_SITES
  payload: TopSite
}

interface RemoveSiteFromPinnedSites {
  type: ActionType.REMOVE_SITE_FROM_PINNED_SITES
  payload: TopSite
}

interface RemovePinnedSitesFromTopSites {
  type: ActionType.SET_DIFFERENCE_TO_TOP_SITES
  payload: undefined
}

interface MoveSiteFromTopSitesToPinnedSites {
  type: ActionType.ADD_SITE_TO_PINNED_SITES
  payload: TopSite
}

interface SetTopSites {
  type: ActionType.SET_TOP_SITES
  payload: TopSite[]
}

export type Action =
  | AddSiteToPinnedSites
  | MoveSiteFromTopSitesToPinnedSites
  | RemovePinnedSitesFromTopSites
  | RemoveSiteFromPinnedSites
  | SetTopSites
