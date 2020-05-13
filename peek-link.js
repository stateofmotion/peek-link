import scrape from 'html-metadata'
import cheerio from 'cheerio'

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

    if (this.url) {
      this.links = this.fromUrl(this.url)
    }
  }

  /**
   * 
   * @param {string} html
   * @return {}
   */
  async run(html) {
    const link = this.firstLink(html);
    return {
      content: this.getTextFromHtml(html),
      links: await this.links(link),
      link: link,
    }
  }

  async fromHtml(inHtml = '') {

    // // If html provided take precedence over html passed in through constructor
    // if (html) {

    // }
  }

  async fromUrl(url) {
    this.metaData = await scrape(url)

    this.twitter = (this.metaData.twitter)
      ? this.getData(this.metaData.twitter)
      : this.getData(null)

    this.openGraph = (this.metaData.openGraph)
      ? this.getData(this.metaData.openGraph)
      : this.getData(null)

    this.general = (this.metaData.general)
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
    return link ? link : null;
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