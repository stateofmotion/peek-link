import PeakLink from './peek-link.js'
import PeekLink from './peek-link.js';

// const pl = new PeakLink('https://www.cnn.com/world/live-news/coronavirus-pandemic-05-07-20-intl/index.html')

async function init() {
  const html = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
    <a href="https://www.npr.org/sections/coronavirus-live-updates/2020/05/13/855117276/south-korea-and-china-see-covid-19-resurgence-after-easing-restrictions"> Npr</a>
      aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p >

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
    <a href="http://npr.com">Npr</a>
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>`

  // const links = await pl.links();
  // const firstLink = await pl.firstLink(html)

  // let text = await pl.getTextFromHtml(html)
  const pl = new PeekLink({
    // html: html,
    // url: 'https://www.npr.org/sections/coronavirus-live-updates/2020/05/13/855117276/south-korea-and-china-see-covid-19-resurgence-after-easing-restrictions'
  });


  const links = await pl.linkPreviews
  // const links = await pl.fromHtml()
  // const links = await pl.fromUrl()

  // const links = await pl.fromUrl('https://www.npr.org/sections/coronavirus-live-updates/2020/05/13/855736912/trump-accuses-dr-fauci-of-wanting-to-play-all-sides-on-reopening')
  // const links = await pl.fromUrl('https://www.npr.org/sections/coronavirus-live-updates/2020/05/13/855117276/south-korea-and-china-see-covid-19-resurgence-after-easing-restrictions')

  console.log(' links :>> ', links);
}

init();

