const r2 = require('r2')
const read = require('fs-readdir-recursive')

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchStr, Position) {
    // This works much better than >= because
    // it compensates for NaN:
    if (!(Position < this.length))
      Position = this.length
    else
      Position |= 0 // round position
    return this.substr(Position - searchStr.length,
      searchStr.length) === searchStr
  }
}

function removeExtension (filename) {
  let lastDotPosition = filename.lastIndexOf('.')
  if (lastDotPosition === -1) return filename
  else return filename.substr(0, lastDotPosition)
}

const exec = async ({email, key, zone, domain, folder}) => {
  let headers = {}
  headers['X-Auth-Email'] = email
  headers['X-Auth-Key'] = key
  let files = read(folder).map(f => `${domain}/${f}`)
  files.forEach(f => {
    if (f && f.toLowerCase().endsWith('.html')) files.push(removeExtension(f))
  })
  files.push(domain)
  console.log('Purging cache for files...')
  files.forEach(f => console.log(f))
  let i = 0, newFiles, promises = []
  while (newFiles = files.slice(i, i + 500)) {
    let json = {files: newFiles}
    let promise = r2.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/purge_cache`, {headers, json}).json
    promises.push(promise)
    i += 500
  }
  return await Promise.all(promises)
}

module.exports = exec
