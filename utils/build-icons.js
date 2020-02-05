const fs = require('fs')
const path = require('path')

const RSVP = require('rsvp')
const Svgo = require('svgo')
const parse5 = require('parse5')
const recursiveReadSync = require('recursive-readdir-sync')

const paths = require('./paths')

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {RSVP.Promise<string>}
 */
async function optimizeSvg(svg) {
  // configure svgo
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { moveGroupAttrsToElems: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
    ],
  })

  const optimizedSvg = await svgo.optimize(svg)

  return optimizedSvg.data
}

/**
 * Get content between opening and closing `<svg>` tags.
 *
 * @param  {string} svg
 * @return {string}
 */
function getSvgContent(svg) {
  const fragment = parse5.parseFragment(svg)
  const content = parse5.serialize(fragment.childNodes[0])
  return content
}

/**
 * Build an icons object in the format: `{ <icon name>: <svg content> }`.
 *
 * @param  {string} src
 * @return {RSVP.Promise<Object>}
 */
function buildIconsObject(src) {
  const icons = {}

  src.forEach(value => {
    // Strip off wildcard (used in gulp watch)
    const cleanPath = path.join(
      '../',
      value.replace('**/*.svg', '').replace('/*.svg', '')
    )

    // Gather SVG files
    const svgFiles = recursiveReadSync(
      path.resolve(__dirname, cleanPath)
    ).filter(file => path.extname(file) === '.svg')

    svgFiles.forEach(svgFile => {
      const svg = fs.readFileSync(
        path.resolve(__dirname, cleanPath, svgFile),
        'utf8'
      )
      const key = path.basename(svgFile, '.svg')

      icons[key] = optimizeSvg(svg).then(optimizedSvg =>
        getSvgContent(optimizedSvg)
      )
    })
  })

  return RSVP.hash(icons)
}

buildIconsObject(paths.svg.src).then(icons => {
  const jsonPath = path.join('../', paths.svg.json)

  fs.writeFile(
    path.resolve(__dirname, `${jsonPath}/icons.json`),
    JSON.stringify(icons),
    err => {
      if (err) return err

      console.log('Icons built successfully 🎉') // eslint-disable-line no-console
    }
  )
})
