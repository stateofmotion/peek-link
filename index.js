import PeakLink from './peek-link.js'
import PeekLink from './peek-link.js';

// const pl = new PeakLink('https://www.cnn.com/world/live-news/coronavirus-pandemic-05-07-20-intl/index.html')

async function init() {
  const html = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
    <a href="https://www.npr.org/2020/05/07/852464328/former-georgia-police-officer-and-his-son-arrested-in-the-death-of-ahmaud-arbery"> Npr</a>
      aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p >

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
    <a href="http://npr.com">Npr</a>
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>`

  // const links = await pl.links();
  // const firstLink = await pl.firstLink(html)

  // let text = await pl.getTextFromHtml(html)
  const pl = new PeekLink();
  let data = await pl.run(html);
  console.log('data :>> ', data);
}

init();

