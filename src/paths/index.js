import head from '../templates/head.html'
import body from '../templates/body.html'

export default async function main(url) {
    let content = `${head.replace("%%ARTICLETITLE%%", "Home")} ${body.replace("%%ARTICLEINFO%%", "")}
    Welcome to InfoDatabase, a place of easy to access and accurate information from authors you trust.
    `

    return new Response(content, {
      headers: { 'content-type': 'text/html' }
    })
}