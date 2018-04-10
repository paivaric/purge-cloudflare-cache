#! /usr/bin/env node

const purge = require('../lib')
// email, key, zone, domain, folder
const argv = require('yargs')
  .option('email', {
    alias: 'e',
    describe: 'Cloudflare\'s email'
  })
  .option('key', {
    alias: 'k',
    describe: 'Cloudflare\'s API key (keep it safe)'
  })
  .option('zone', {
    alias: 'z',
    describe: 'Cloudflare\'s zone id'
  })
  .option('domain', {
    alias: 'd',
    describe: 'Website full domain or prefix ex.: https://my.website.com/prefix'
  })
  .option('folder', {
    alias: 'f',
    describe: 'Folder containing the files'
  })
  .help()
  .argv

argv.email = argv.email || argv._[0]
argv.key = argv.key || argv._[1]
argv.zone = argv.zone || argv._[2]
argv.domain = argv.domain || argv._[3]
argv.folder = argv.folder || argv._[4]

purge(argv).then(result => {
  console.log(result)
  process.exit(0)
}).catch(e => {
  console.error(e)
  process.exit(1)
})
