// import http from 'http'
// import { JSDOM } from 'jsdom'
import scrape from 'html-metadata'
import cheerio from 'cheerio'

export default class PeekLink {
  constructor(url) {
    this.url = url;
  }

  async links() {
    this.metaData = await scrape(this.url)
    this.twitter = this.metaData.twitter
    this.openGraph = this.metaData.openGraph
    this.general = this.general

    return {
      twitter: this.twitter,
      openGraph: this.openGraph,
      general: this.general,
    }
  }
}