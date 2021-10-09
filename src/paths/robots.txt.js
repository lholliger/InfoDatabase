const RobotsTXT = async function(){
    return new Response(
`User-agent: *
Allow: /
Disallow: /article/
Disallow: /references/`, {
      headers: { 'content-type': 'text/plain' },
    })
}

export {RobotsTXT}