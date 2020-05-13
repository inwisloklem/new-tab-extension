import {ActionType} from 'store/actionTypes'
import {TopSite} from 'interfaces/TopSite'

export namespace Action {
  export interface SetTopSites {
    type: ActionType.SET_TOP_SITES,
    payload: TopSite[],
  }
}
