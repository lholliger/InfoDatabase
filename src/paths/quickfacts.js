import head from '../templates/head.html'
import body from '../templates/body.html'

import { generateAuthorNameString } from "../NameGeneration.js"

export default async function main(url) {
    let articleName = url.pathname.split("/")[2]

    const author = await generateAuthorNameString(articleName)

    let meta = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${articleName}/bare`)
    meta = await meta.json()

    let content = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${articleName}/html`)
    let wikiarticle = await content.text()

    content = `${head.replace("%%ARTICLETITLE%%", `Quick Facts for ${meta.title}`)} ${body.replace("%%ARTICLEINFO%%", `<h1>Quick Facts for <a href='/article/${articleName}'>${meta.title}</a></h1>`)}`

    content += "<table" + wikiarticle.split("<table")[1].split("</table>")[0] + "</table>"

    content += `<p class='idbquickfact'>Return to the main article <a href='/article/${articleName}'>here</a>.</p>`

    return new Response(content, {
        headers: { 'content-type': 'text/html' }
    })
}