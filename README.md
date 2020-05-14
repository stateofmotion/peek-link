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
const pl = new PeekLink({
  url: [PROVIDE_YOUR_URL_HERE]
})


const links = await pl.fromUrl()

// Can also use then/catch
pl.fromUrl()
.then(function(links) {
  console.log(links)
}).catch(function(error) {
  console.log(error)
})
```

### Example 2

```
const pl = new PeekLink()

const links = await pl.fromUrl([YOUR_URL_HERE])

// Can also use then/catch
pl.fromUrl([YOUR_URL_HERE])
.then(function(links) {
  console.log(links)
}).catch(function(error) {
  console.log(error)
})
```

## Get Link Previews from a HTML

### Example 1

```
const pl = new PeekLink({
  html: [HTML_AS_STRING]
})


const links = await pl.fromHtml()

// Can also use then/catch
pl.fromHtml()
.then(function(links) {
  console.log(links)
}).catch(function(error) {
  console.log(error)
})
```

### Example 2

```
const pl = new PeekLink()


const links = await pl.fromHtml([HTML_AS_STRING])
// Can also use then/catch
pl.fromHtml([HTML_AS_STRING])
.then(function(links) {
  console.log(links)
}).catch(function(error) {
  console.log(error)
})
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


