import {head, body} from "../head.js"
const Homepage = async function(){
    let content = `${head.replace("%%ARTICLETITLE%%", "Home")} ${body.replace("%%ARTICLEINFO%%", "")}
    Welcome to InfoDatabase, a place of easy to access and accurate information from authors you trust.
    `

    return new Response(content, {
      headers: { 'content-type': 'text/html' }, status: 404
    })
}

export {Homepage}