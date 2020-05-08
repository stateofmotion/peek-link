import PeakLink from './peek-link.js'

const pl = new PeakLink('https://www.cnn.com/world/live-news/coronavirus-pandemic-05-07-20-intl/index.html')

async function init() {
  const links = await pl.links();
  console.log('links :>> ', links);
}

init();

