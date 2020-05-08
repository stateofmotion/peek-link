import PeakLink from './peek-link.js'

const pl = new PeakLink('https://www.cnn.com/world/live-news/coronavirus-pandemic-05-07-20-intl/index.html')

async function init() {
  const html = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
    <a href="http://google.com"> Google</a>
      aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
    <a href="http://npr.com">Npr</a>
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>`

  // const links = await pl.links();
  const firstLink = await pl.firstLink(html)
  // console.log('links :>> ', links);
}

init();

