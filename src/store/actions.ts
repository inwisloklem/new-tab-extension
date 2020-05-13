import {ActionType} from 'store/actionTypes'
import {TopSite} from 'interfaces/TopSite'

interface RemoveSiteFromTopSites {
  type: ActionType.REMOVE_SITE_FROM_TOP_SITES,
  payload: string,
}

interface SetTopSites {
  type: ActionType.SET_TOP_SITES,
  payload: TopSite[],
}

export type Action =
  | RemoveSiteFromTopSites
  | SetTopSites
