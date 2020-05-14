# peek-link

Get open grah settings, and twitter link preview data from a provided url. PeekLink also allows you to pass in a block of html text containing an anchor tag, and will fetch the link preview data from the url extracted from the anchor tag. PeekLink was created to help with building social media feed features such as the way link previews are displayed in most social networks.


## Features
- Fetch open graph, and twitter data such as a page image, description, and title from the meta tags in the html of a provided url
- Extract the first url from an html anchor tag from a block of html, and fetch the link previews associated with it

## Installing

```
npm install peek-link
```

## Get Link Previews from a URL

### Example 1
Create a new instance of PeekLink passing in an object literal with a url key and value

```
// pass in object literal with either a text block of html, or a url

const pl = new PeekLink({
  url: [PROVIDE_YOUR_URL_HERE]
})


const links = await pl.fromUrl()
```

## Link Preview Response

```
{
  twitter: {
    image: [TWITTER_IMAGE_URL],
    description: [TWITTER_DESCRIPTION],
    title: [TITLE]
  },
  openGraph: {
    image: [OPEN_GRAPH_IMAGE_URL],
    description: [OPEN_GRAPH_DESCRIPTION],
    title: [OPEN_GRAPH_TITLE]
  },
  general: {
    image: [GENERAL_IMAGE_URL],
    description: [GENERAL_DESCRIPTION],
    title: [GENERAL_TITLE]
  }
}
```
