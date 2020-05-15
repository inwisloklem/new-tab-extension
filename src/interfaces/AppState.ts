import {TopSite} from 'interfaces/TopSite'

export interface AppState {
  pinnedSites: {
    readonly sites: TopSite[]
  }
  topSites: {
    readonly sites: TopSite[]
  }
}
