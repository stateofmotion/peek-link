import scrape from 'html-metadata'

export default class PeekLink {
  constructor(url) {
    this.url = url;
  }

  async links() {
    this.metaData = await scrape(this.url)

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

  getData(data) {
    return {
      image: this.getImage(data),
      title: this.getTitle(data),
      description: this.getDescription(data)
    }
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