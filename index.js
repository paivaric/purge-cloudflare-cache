const r2 = require('r2')
const read = require('fs-readdir-recursive')

const exec = async () => {
  let email = process.argv[2]
  let key = process.argv[3]
  let zone = process.argv[4]
  let domain = process.argv[5]
  let folder = process.argv[6]
  let headers = {}
  headers['X-Auth-Email'] = email
  headers['X-Auth-Key'] = key
  let files = read(folder).map(f => `${domain}/${f}`)
  let json = {files}
  return await r2.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/purge_cache`, {headers, json}).json
}

if (require.main === module) {
  exec().then(result => {
    console.log(result)
    process.exit(0)
  }).catch(err => {
    console.error(err)
    process.exit(1)
  })
}

module.exports = exec
