const head = `<head>
<title>InfoDatabase - %%ARTICLETITLE%%</title>
<meta charset='UTF-8'>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<style>
body {
    background-color: #F4F4F4 !important;
    max-width: 45rem !important;
    color: #444444;
    padding: 2rem;
    margin: auto;
    margin-bottom: 3rem;
    font-size: 16px;
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif !important;
    overflow-x: hidden;
}

:not(section) > section, body p {
  text-align: justify;
  text-indent: 30px;
}

a {
  text-decoration: underline;
  color: #444444;
}

a[rel="mw:WikiLink"] {
    color: #444444;
    pointer-events: none;
    cursor: text !important;
    text-decoration: none;
}

tbody {
    width: 100%;
    max-width: 100%;
    overflow:scroll;
}
.mw-ref a:after, .infobox, .sistersitebox, .vcard, .navbox, .stub, #coordinates { /* these elements are in limbo to be removed */
    border: 1px solid green;
}
h1, h2, h3, h4, h5, h6 {
    border-bottom: none !important;
}

caption {
    font-size: 32px !important;
    margin-bottom: 15px;
}

center < h1 {
    margin-bottom: 2rem;
}

/* elements need hiding */
.mw-reflink-text, .nomobile, .noprint, .reference, .infobox-title, .ambox-content, .hatnote:not(section .hatnote), .mw-linkback-text {
  display: none;
}

.hatnote {
  padding: 0px;
  font-size: 12px;
}

.hatnote a {
  text-decoration: underline;
  pointer-events: auto;
}

a img  {
  text-align: center !important;
  margin: auto;
  display: block;
  height: auto;
  border: none;
}

.tsingle {
  max-width: 100% !important;
  width: auto !important;
}

img {
  max-width: 100%;
}

figcaption, div.infobox-caption, div.thumbcaption {
  font-style: italic;
  font-size: 10px;
}

table.wikitable, table.infobox, td.infobox-full-data table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  table-layout: fixed;
}
tr { 
  border: solid;
  border-width: 1px 0;
}

td {
  padding: 5px;
}

tbody tr:nth-child(even){
  background-color: rgba(0,0,0,0) !important;
}

tbody tr:nth-child(odd){
  background-color: #DDDDDD !important;
}

.hatnote.navigation-not-searchable {
  font-style: italic;
  font-size: 12px;
}

/* infodatabase-specific */

.idb-header {
font-size: 300%;
margin-top: 0;
}

.idb-nav {
text-align: center;
margin-bottom: 60px;
}

.idb-footer {
margin-top: 40px;
text-align: center;
}

hr {
border: none;
border-top: 1px solid black;
}
</style>
</head>`

const body = `
<body lang='en'>
<div class='idb-nav'>
<h1 class='idb-header'>InfoDatabase</h1>
<a href='/'>Home</a>&emsp;&emsp;<a href='/about'>About</a>&emsp;&emsp;<a href='/search'>Search</a>
<hr>
%%ARTICLEINFO%%
</div>
`

export {head, body};