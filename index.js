
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
  }
]

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  let uri = request.url.replace(/^https:\/\/.*?\//gi, "/");

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
      if (point.point == uri) return await serve(point, uri)
    } else if (point.start) {
      if (uri.startsWith(point.start)) {
        return await serve(point, uri)
      }
    }
  }
    return new Response("404!", {
      headers: { 'content-type': 'text/html' }, status: 404
    })
}
