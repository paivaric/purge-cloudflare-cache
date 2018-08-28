const r2 = require('r2')
const read = require('fs-readdir-recursive')

const exec = async ({email, key, zone, domain, folder}) => {
  let headers = {}
  headers['X-Auth-Email'] = email
  headers['X-Auth-Key'] = key
  let files = read(folder).map(f => `${domain}/${f}`)
  files.push(domain)
  console.log('Purging cache for files...')
  files.forEach(f => console.log(f))
  let json = {files}
  return await r2.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/purge_cache`, {headers, json}).json
}

module.exports = exec
