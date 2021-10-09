import head from '../templates/head.html'
import body from '../templates/body.html'

export default async function main(url) {
    let content = `${head.replace("%%ARTICLETITLE%%", "About")} ${body.replace("%%ARTICLEINFO%%", "")}
    InfoDatabase is a free online database of information.
    All information published on InfoDatabase comes from our trusted team authors.
    New articles are being created often and old articles are constantly kept up to date.
    Our authors use hundreds of sources in creating their articles, all of which are available at the end of every article.
    Our authors cross-check each other to ensure information is accurate, however if you notice any inaccuracies please <a href='mailto:noreply@infodatabase.org'>email us</a>.
    `

    return new Response(content, {
      headers: { 'content-type': 'text/html' }
    })
}
