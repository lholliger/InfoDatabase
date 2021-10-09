
const paths = [
  {
    "point": "/robots.txt",
    "data": import(`./src/static/robots.txt`),
    "type": "text/plain"
  },
  {
    "point": "/infodatabase.css",
    "data": import(`./src/static/infodatabase.css`),
    "type": "text/css"
  },
  {
    "point": "/",
    "run": import(`./src/paths`),
  },
  {
    "point": "/about",
    "run": import(`./src/paths/about`),
  },
  {
    "start": "/article",
    "run": import(`./src/paths/article`),
  },
  {
    "start": "/references",
    "run": import(`./src/paths/references`),
  },
  {
    "start": "/search",
    "run": import(`./src/paths/search`),
  }
]

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  let url = new URL(request.url)
  let uri = url.pathname;

  // this section seems very hacky, would like to replace it with something better

  async function serve(point, uri) {
    if (point.data) {
      return new Response((await point.data).default, {
      headers: { 'content-type': point.type }
      })
    } else {
      return await (await point.run).default(uri)
    }
  }

  for (let point of paths) {
    if (point.point) {
      if (point.point == uri) return await serve(point, url)
    } else if (point.start) {
      if (uri.startsWith(point.start)) {
        return await serve(point, url)
      }
    }
  }
    return new Response("404!", {
      headers: { 'content-type': 'text/html' }, status: 404
    })
}
