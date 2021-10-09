import { About } from "./src/paths/about.js"
import {RobotsTXT} from "./src/paths/robots.txt.js"
import { Homepage } from "./src/paths/index.js"
import { ReferencesIndex } from "./src/paths/references/index.js"
import { ArticleIndex } from "./src/paths/article/index.js"
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  let uri = request.url.replace(/^https:\/\/.*?\//gi, "/");
  if (uri.startsWith("/article/")) {
    return await ArticleIndex(uri)
  } else if (uri == "/") {
    return await Homepage()
  } else if (uri.startsWith("/references/")) {
    return await ReferencesIndex(uri)
  } else if (uri == "/about") {
    return await About()
  } else if (uri == "/robots.txt") {
    return await RobotsTXT()
  } else {
    return new Response("404!", {
      headers: { 'content-type': 'text/html' }, status: 404
    })
  }
}
