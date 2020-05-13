type MostVisitedURL = chrome.topSites.MostVisitedURL

export function getTopSites(): Promise<MostVisitedURL[]> {
  return new Promise(resolve => chrome.topSites.get(resolve))
}
