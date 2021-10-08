addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const firstNames = [ "Jennifer", "Michelle", "Lisa", "Kimberly", "Amy", "Angela", "Melissa", "Tammy", "Mary", "Julie", "Stephanie", "Heather", "Tracy", "Dawn", "Karen", "Laura", "Susan", "Christine", "Elizabeth", "Tina", "Shannon", "Kelly", "Rebecca", "Cynthia", "Lori", "Patricia", "Nicole", "Pamela", "Wendy", "Christina", "Sandra", "Stacy", "Deborah", "Teresa", "Andrea", "Denise", "Maria", "Donna", "Michele", "Sharon", "Stacey", "Linda", "Brenda", "Dana", "Tonya", "Rhonda", "Barbara", "Monica", "Tara", "Cheryl", "Nancy", "Robin", "Kathleen", "Rachel", "Carrie", "April", "Debra", "Sarah", "Jill", "Sherry", "Theresa", "Tiffany", "Paula", "Jessica", "Catherine", "Melanie", "Katherine", "Leslie", "Gina", "Cindy", "Kristin", "Tanya", "Renee", "Tracey", "Jacqueline", "Holly", "Heidi", "Ann", "Crystal", "Tamara", "Sheila", "Diana", "Diane", "Amanda", "Melinda", "Margaret", "Kristen", "Suzanne", "Christy", "Regina", "Kathy", "Carol", "Erin", "Jodi", "Deanna", "Laurie", "Yolanda", "Victoria", "Danielle", "Beth", "Kim", "Valerie", "Shelly", "Carolyn", "Alicia", "Anna", "Carla", "Erica", "Tricia", "Veronica", "Kathryn", "Janet", "Kristi", "Sara", "Terri", "Traci", "Kristina", "Jamie", "Allison", "Kristine", "Colleen", "Anne", "Sherri", "Felicia", "Connie", "Sonya", "Anita", "Lynn", "Michael", "James", "David", "John", "Robert", "Christopher", "William", "Jason", "Brian", "Scott", "Richard", "Jeffrey", "Mark", "Kevin", "Joseph", "Steven", "Thomas", "Eric", "Matthew", "Daniel", "Timothy", "Charles", "Anthony", "Paul", "Gregory", "Kenneth", "Stephen", "Shawn", "Chad", "Todd", "Ronald", "Edward", "Andrew", "Donald", "Patrick", "Sean", "Keith", "Gary", "Douglas", "Jonathan", "Aaron", "George", "Craig", "Larry", "Jeremy", "Troy", "Peter", "Bryan", "Dennis", "Jerry", "Ryan", "Raymond", "Jeffery", "Frank", "Jose", "Terry", "Adam", "Bradley", "Rodney", "Shane", "Travis", "Tony", "Derek", "Russell", "Marcus", "Samuel", "Randy", "Chris", "Benjamin", "Marc", "Roger", "Carl", "Brent", "Johnny", "Billy", "Phillip", "Corey", "Jon", "Bobby", "Joshua", "Juan", "Danny", "Gerald", "Derrick", "Lawrence", "Joel", "Vincent", "Curtis", "Carlos", "Walter", "Brett", "Wayne", "Jimmy", "Philip", "Brandon", "Jamie", "Erik", "Lance", "Alan", "Darren", "Joe", "Randall", "Justin", "Nathan", "Martin", "Shannon", "Jesse", "Frederick", "Bruce", "Roy", "Antonio", "Henry", "Victor", "Jay", "Willie", "Kyle", "Arthur", "Darrell", "Albert", "Allen", "Ricky", "Christian", "Nicholas", "Micheal", "Dale", "Louis", "Lee", "Glenn" ]

const lastNames = [ "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis", "Harrison", "Gibson", "Mcdonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols", "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence", "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr", "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", "Williamson", "Johnston", "Banks", "Meyer", "Bishop", "Mccoy", "Howell", "Alvarez", "Morrison", "Hansen", "Fernandez", "Garza", "Harvey", "Little", "Burton", "Stanley", "Nguyen", "George", "Jacobs", "Reid", "Kim", "Fuller", "Lynch", "Dean", "Gilbert", "Garrett", "Romero", "Welch", "Larson", "Frazier", "Burke", "Hanson", "Day", "Mendoza", "Moreno", "Bowman", "Medina", "Fowler", "Brewer", "Hoffman", "Carlson", "Silva", "Pearson", "Holland", "Douglas", "Fleming", "Jensen", "Vargas", "Byrd", "Davidson", "Hopkins", "May", "Terry", "Herrera", "Wade", "Soto", "Walters", "Curtis", "Neal", "Caldwell", "Lowe", "Jennings", "Barnett", "Graves", "Jimenez", "Horton", "Shelton", "Barrett", "Obrien", "Castro", "Sutton", "Gregory", "Mckinney", "Lucas", "Miles", "Craig", "Rodriquez", "Chambers", "Holt", "Lambert", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "Mcdaniel", "Mendez", "Bush", "Vaughn", "Parks", "Dawson", "Santiago", "Norris", "Hardy", "Love", "Steele", "Curry", "Powers", "Schultz", "Barker", "Guzman", "Page", "Munoz", "Ball", "Keller", "Chandler", "Weber", "Leonard", "Walsh", "Lyons", "Ramsey", "Wolfe", "Schneider", "Mullins", "Benson", "Sharp", "Bowen", "Daniel", "Barber", "Cummings", "Hines", "Baldwin", "Griffith", "Valdez", "Hubbard", "Salazar", "Reeves", "Warner", "Stevenson", "Burgess", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thornton", "Dennis", "Mcgee", "Farmer", "Delgado", "Aguilar", "Vega", "Glover", "Manning", "Cohen", "Harmon", "Rodgers", "Robbins", "Newton", "Todd", "Blair", "Higgins", "Ingram", "Reese", "Cannon", "Strickland", "Townsend", "Potter", "Goodwin", "Walton", "Rowe", "Hampton", "Ortega", "Patton", "Swanson", "Joseph", "Francis", "Goodman", "Maldonado", "Yates", "Becker", "Erickson", "Hodges", "Rios", "Conner", "Adkins", "Webster", "Norman", "Malone", "Hammond", "Flowers", "Cobb", "Moody", "Quinn", "Blake", "Maxwell", "Pope", "Floyd", "Osborne", "Paul", "Mccarthy", "Guerrero", "Lindsey", "Estrada", "Sandoval", "Gibbs", "Tyler", "Gross", "Fitzgerald", "Stokes", "Doyle", "Sherman", "Saunders", "Wise", "Colon", "Gill", "Alvarado", "Greer", "Padilla", "Simon", "Waters", "Nunez", "Ballard", "Schwartz", "Mcbride", "Houston", "Christensen", "Klein", "Pratt", "Briggs", "Parsons", "Mclaughlin", "Zimmerman", "French", "Buchanan", "Moran", "Copeland", "Roy", "Pittman", "Brady", "Mccormick", "Holloway", "Brock", "Poole", "Frank", "Logan", "Owen", "Bass", "Marsh", "Drake", "Wong", "Jefferson", "Park", "Morton", "Abbott", "Sparks", "Patrick", "Norton", "Huff", "Clayton", "Massey", "Lloyd", "Figueroa", "Carson", "Bowers", "Roberson", "Barton", "Tran", "Lamb", "Harrington", "Casey", "Boone", "Cortez", "Clarke", "Mathis", "Singleton", "Wilkins", "Cain", "Bryan", "Underwood", "Hogan", "Mckenzie", "Collier", "Luna", "Phelps", "Mcguire", "Allison", "Bridges", "Wilkerson", "Nash", "Summers", "Atkins", "Wilcox", "Pitts", "Conley", "Marquez", "Burnett", "Richard", "Cochran", "Chase", "Davenport", "Hood", "Gates", "Clay" ]

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

async function generateAuthorNameString(articleName) {
  const msgUint8 = new TextEncoder().encode(articleName)
  const hashBuffer = await crypto.subtle.digest('MD5', msgUint8)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

  return`${firstNames[parseInt(`${hashHex[0]}${hashHex[1]}`, 16)]} ${lastNames[parseInt(`${hashHex[2]}${hashHex[3]}`, 16)]}`
}

async function handleRequest(request) {
  let uri = request.url.replace(/^https:\/\/.*?\//gi, "/");
  if (uri.startsWith("/article/")) {
    let articleName = uri.split("/")[2]

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
  } else if (uri == "/") {

    let content = `${head.replace("%%ARTICLETITLE%%", "Home")} ${body.replace("%%ARTICLEINFO%%", "")}
    Welcome to InfoDatabase, a place of easy to access and accurate information from authors you trust.
    `

    return new Response(content, {
      headers: { 'content-type': 'text/html' }, status: 404
    })
  } else if (uri.startsWith("/references/")) {

    let articleName = uri.split("/")[2]

    const author = await generateAuthorNameString(articleName)

    let meta = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${articleName}/bare`)
    meta = await meta.json()

    let content = await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${articleName}/html`)
    wikiarticle = await content.text()

    content = `${head.replace("%%ARTICLETITLE%%", `References for ${meta.title}`)} ${body.replace("%%ARTICLEINFO%%", `<h1>Article Information for <a href='/article/${articleName}'>${meta.title}</a></h1>`)}`

    content += `<h2>References</h2>`
    content += wikiarticle.split("<h2 id=\"References\">References</h2>")[1].split("</section>")[0]

    content += `<h2>Attributions</h2>This article uses matrial from <a href='https://en.wikipedia.org/wiki/${articleName}'>"${meta.title}"</a> by Wikipedia contributors, which is released under the <a href='${meta.license.url}'>${meta.license.title}</a> license.`

    return new Response(content, {
      headers: { 'content-type': 'text/html' }
    })

  } else if (uri == "/about") {
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
  } else if (uri == "/robots.txt") {
    return new Response(
      `User-agent: *
Allow: /
Disallow: /article/
Disallow: /references/`, {
      headers: { 'content-type': 'text/plain' },
    })
  } else {
    return new Response("404!", {
      headers: { 'content-type': 'text/html' }, status: 404
    })
  }
}
