import head from '../templates/head.html'
import body from '../templates/body.html'

import { generateAuthorNameString } from "../NameGeneration.js"

export default async function main(uri) {
    let articleName = uri.split("/")[2]

    const author = await generateAuthorNameString(articleName)

    let meta = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${articleName}/bare`)
    meta = await meta.json()

    let content = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${articleName}/html`)
    let wikiarticle = await content.text()

    content = `${head.replace("%%ARTICLETITLE%%", `References for ${meta.title}`)} ${body.replace("%%ARTICLEINFO%%", `<h1>Article Information for <a href='/article/${articleName}'>${meta.title}</a></h1>`)}`

    content += `<h2>References</h2>`
    content += wikiarticle.split("<h2 id=\"References\">References</h2>")[1].split("</section>")[0]

    content += `<h2>Attributions</h2>This article uses matrial from <a href='https://en.wikipedia.org/wiki/${articleName}'>"${meta.title}"</a> by Wikipedia contributors, which is released under the <a href='${meta.license.url}'>${meta.license.title}</a> license.`

    return new Response(content, {
      headers: { 'content-type': 'text/html' }
    })
}