import scrape from 'html-metadata'
import cheerio from 'cheerio'
import getUrls from 'get-urls'

/**
 * General link data from the page as well as open graph and twitter data.
 * @typedef {Object} LinkPreviews
 * @property {Link} twitter
 * @property {Link} openGraph
 * @property {Link} general
 */

/**
* Link data including image url, page description and page title
* @typedef {Object} Link
* @property {string} image
* @property {string} title
* @property {string} description
*/


export default class PeekLink {
  constructor(peekLinkData) {
    this.html = peekLinkData && peekLinkData.html ? peekLinkData.html : null
    this.url = peekLinkData && peekLinkData.url ? peekLinkData.url : null
    this.links = { twitter: null, openGraph: null, general: null }
  }

  get linkPreviews() {
    if (this.url) {
      return this.fromUrl(this.url)
    } else if (this.html) {
      return this.fromHtml(this.html)
    }

    return this.links
  }

  async fromHtml(inHtml = '') {
    const html = inHtml ? inHtml : this.html

    if (html) {
      let url = await this.urlFromHtml(html)
      if (url) {
        this.links = await this.fromUrl(url)
      } else {
        // try finding first link from text if content is not HTML
        const urls = getUrls(html)
        if (urls.size) {
          url = urls.values().next().value
          this.links = await this.fromUrl(url)
        }
      }
    }

    return this.links
  }

  async urlFromHtml(inHtml = '') {
    const html = inHtml ? inHtml : this.html
    this.url = this.firstLink(html)
    return this.url
  }

  async fromUrl(inUrl = '') {
    const url = inUrl ? inUrl : this.url;
    this.metaData = url ? await scrape(url) : null
    this.url = url;

    this.twitter = (this.metaData && this.metaData.twitter)
      ? this.getData(this.metaData.twitter)
      : this.getData(null)

    this.openGraph = (this.metaData && this.metaData.openGraph)
      ? this.getData(this.metaData.openGraph)
      : this.getData(null)

    this.general = (this.metaData && this.metaData.general)
      ? this.getData(this.metaData.general)
      : this.getData(null)

    return {
      twitter: this.twitter,
      openGraph: this.openGraph,
      general: this.general,
    }
  }

  firstLink(html) {
    if (!html) return null
    const $ = cheerio.load(html)
    let link = $('a').first().attr('href')
    return link ? link : null
  }

  getData(data) {
    return {
      image: this.getImage(data),
      title: this.getTitle(data),
      description: this.getDescription(data)
    }
  }

  getTextFromHtml(html) {
    const $ = cheerio.load(html)

    let text = $("*").text()
    return text.replace(/\s\s+/g, ' ');
  }

  getImage(data) {
    return (data && data.image && data.image.url && data.image.url) ? data.image.url : null
  }

  getDescription(data) {
    return data && data.description ? data.description : null
  }

  getTitle(data) {
    return data && data.title ? data.title : null
  }
}