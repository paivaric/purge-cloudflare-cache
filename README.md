# purge-cloudflare-cache
Purges cloudflare cache based on a local folder's content. It reads file names from folder and based on a specific domain it purges the cache.

Get Cloudfare's domain zone and key at https://www.cloudflare.com/a/overview/yourdomain.com

using npx:

`npm install -g npx`

`npx purge-cloudflare-cache your@email.com the_domain_zone your_cloudflare_key https://your.website.com some/folder`

or just install it globally and run purge command

`npm install -g purge-cloudflare-cache`

`purge your@email.com the_domain_zone your_cloudflare_key https://your.website.com some/folder`

