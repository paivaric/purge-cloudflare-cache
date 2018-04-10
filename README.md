# purge-cloudflare-cache

NodeJs module to purge cloudflare cache based on a local folder's content. It reads file names from folder and based on a specific domain it purges the cache.

It uses async and await, so, it requires node 7.6+

Get Cloudfare's domain zone and key at https://www.cloudflare.com/a/overview/yourdomain.com

using npx:

`npm install -g npx`

`npx purge-cloudflare-cache your@email.com your_cloudflare_key the_domain_zone https://your.website.com some/folder`

or using yargs

`npx purge-cloudflare-cache -e your@email.com -k your_cloudflare_key -z the_domain_zone -d https://your.website.com -f some/folder`

or just install it globally and run purge command

`npm install -g purge-cloudflare-cache`

`purge your@email.com your_cloudflare_key the_domain_zone https://your.website.com some/folder`

or using yargs

`purge -e your@email.com -k your_cloudflare_key -z the_domain_zone -d https://your.website.com -f some/folder`

Ex.:

For a some/folder tree like:

```
├── assets
│   ├── fonts
│   │   ├── roboto-regular.ttf
│   │   └── roboto.scss
│   ├── icon
│   │   └── favicon.ico
│   └── imgs
│       └── logo.png
├── build
│   ├── main.css
│   ├── main.js
├── index.html

```

It will purge cache for files:

```
https://your.website.com/index.html
https://your.website.com/build/main.css
https://your.website.com/build/main.js
https://your.website.com/assets/imgs/logo.png
https://your.website.com/assets/icon/favicon.ico
https://your.website.com/assets/fonts/roboto.css
https://your.website.com/assets/fonts/roboto-regular.ttf
```
