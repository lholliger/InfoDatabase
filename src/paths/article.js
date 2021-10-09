import head from '../templates/head.html'
import body from '../templates/body.html'
import { generateAuthorNameString } from "../NameGeneration.js"

export default async function main(url) {
    let articleName = url.pathname.split("/")[2]

    const author = await generateAuthorNameString(articleName)

    let meta = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${articleName}/bare`)
    meta = await meta.json()

    let content = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${articleName}/html`)
    content = await content.text()

    // lets make it pretty

    // regexes should be replaced with something more efficient, worker CPU time is limited

    // replace wikipedia head with self
    content = content.replace(/\<head(.*)\<\/head\>/, head)

    // set new starting body

    content = content.replace(/\<body(.*)\>/, body)

    // set titles

    content = content.replace("%%ARTICLEINFO%%", `<h1>${meta.title}</h1><i>Written by ${author}. Last updated ${new Date(meta.latest.timestamp).toLocaleDateString()}</i>`)
    content = content.replaceAll("%%ARTICLETITLE%%", meta.title)
    // replace wording
    content = content.replaceAll(/Main article.*\: /g, "&emsp;&emsp;<b>More on this topic: </b>")
    content = content.replaceAll(/Further information\: /g, "&emsp;&emsp;<b>More information: </b>")
    content = content.replaceAll(/See also\: /g, "&emsp;&emsp;<b>Related: </b>")

    // clean up ending
    content = content.split(/<h2 id="Notes">Notes<\/h2>|<h2 id="See\_also">See also<\/h2>/)[0]


    content += `
 <div class='idb-footer'>
    <hr><i>
    This article falls under the <a href='${meta.license.url}'>${meta.license.title}</a> license. For attributions and references on this article, please <a href='/references/${articleName}'>click here</a>.<br><br>
    For more information about the InfoDatabase team, check our <a href='/about'>About Us</a> page.</i><br><br>
    InfoDatabase ${new Date().getFullYear()}
</div>`

    return new Response(content, {
      headers: { 'content-type': 'text/html' },
    })
}