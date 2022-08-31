import head from '../templates/head.html'
import body from '../templates/body.html'

import { generateAuthorNameString } from "../NameGeneration.js"

export default async function main(uri) {
    let searchQuery = uri.searchParams.get('q')
    if (searchQuery == undefined || searchQuery == ""){
      let content = `${head.replace("%%ARTICLETITLE%%", `Search`)}${body.replace('%%ARTICLEINFO%%','<form action="/search" method="get"><input name="q" class="xsearch" placeholder="Put your query here"></form><h3>Enter a search in the box above</h3>')}`
      return new Response(content, {
        headers: { 'content-type': 'text/html' }
      })
    }

    let results = await fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=${encodeURI(searchQuery)}&gsrlimit=10&prop=extracts|info&pilimit=max&exintro&explaintext&exsentences=3&exlimit=max&inprop=url`)
    results = (await results.json()).query.pages
    let items = [];
    for (let i in results){
      let obj = results[i];
      let pathname = obj.fullurl.split('/wiki/')[1]; 
      let author = await generateAuthorNameString(pathname)
      items.push(`
    <div>
      <h3 style='text-align: left;'><a href='/article/${pathname}'>${obj.title}</a> by ${author}</h3><p>${obj.extract}</p> 
    </div>
      `);
    }
    let content = `${head.replace("%%ARTICLETITLE%%", `Search for "${searchQuery}"`)}${body.replace('%%ARTICLEINFO%%', `<form action="/search" method="get"><input name="q" class="xsearch" placeholder="Put your query here" value="${searchQuery}"></form>${items.join('')}`)}`
    return new Response(content, {
      headers: { 'content-type': 'text/html' }
    })
}