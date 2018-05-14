module.exports.splitRev = function (s) {
  if (!s) {
    return [ -1, '00000000000000' ]
  }

  const i = s.indexOf('-')
  const ver = s.slice(0, i)

  return [ ver === 'INF' ? Infinity : parseInt(ver, 10), s.slice(i + 1) ]
}

module.exports.isSameOrNewer = function (a, b) {
  const [ av, ar ] = module.exports.splitRev(a)
  const [ bv, br ] = module.exports.splitRev(b)
  return av > bv || (av === bv && ar >= br)
}
