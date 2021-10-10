import head from '../templates/head.html'
import body from '../templates/body.html'

import { generateAuthorNameString } from "../NameGeneration.js"

export default async function main(uri) {
    let searchQuery = uri.searchParams.get('query')
    if (searchQuery == undefined){
      let content = `${head}${body.replace('%%ARTICLEINFO%%','<h3>No search query provided</h3>')}`
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
    let content = `${head}${body.replace('%%ARTICLEINFO%%',items.join(''))}`
    return new Response(content, {
      headers: { 'content-type': 'text/html' }
    })
}