# InfoDatabase

Schools often do not allow Wikipedia to be used as a source for reasons such as "there's no author", "anyone can edit it", or "information is probably incorrect".
Although information *can* be incorrect sometimes, most articles have some level of edit prevention. InfoDatabase is able to answer most of the other common arguments.

## What Can It Do?

- InfoDatabase generate's an author(s) name from the values of the hash of the article title, meaning the page can be edited and the name will still remain the same. This makes citing the "author" easy.

- The page is reformatted removing most hyperlinks and citations to improve readability and to hide the fact that it's all Wikipedia data
  
- References are moved to an external page to make the page a bit more simple, and to still maintain proper credit.


## Plans

A rough todo list:

- [ ] have some basic theming options to match user preference
- [ ] have buttons to easily generate citations for articles
- [ ] obfuscate the URL a bit
- [ ] search
- [ ] a better Home and About Us page
- [ ] move away from a single file for everything





## Development

I haven't worked much with Workers in the past, so a few things might be missing here, issues and PRs welcome!

*You may need to install Cloudflare's [Wrangler](https://developers.cloudflare.com/workers/get-started/guide#2-install-the-workers-cli) CLI if you haven't already*

You may need to create a `wrangler.toml` file to test the project. Documentation on setting that up can be found on [Cloudflare's website](https://developers.cloudflare.com/workers/get-started/guide#7-configure-your-project-for-deployment)

To test edits live, run `wrangler dev`