parcelRequire = (function(e) {
  var r = "function" == typeof parcelRequire && parcelRequire,
    n = "function" == typeof require && require,
    i = {}
  function u(e, u) {
    if (e in i) return i[e]
    var t = "function" == typeof parcelRequire && parcelRequire
    if (!u && t) return t(e, !0)
    if (r) return r(e, !0)
    if (n && "string" == typeof e) return n(e)
    var o = new Error("Cannot find module '" + e + "'")
    throw ((o.code = "MODULE_NOT_FOUND"), o)
  }
  return (
    (u.register = function(e, r) {
      i[e] = r
    }),
    (i = e(u)),
    (u.modules = i),
    u
  )
})(function(require) {
  var b = "bib",
    e = "bub"
  e, b
  var c = "cat",
    a = "cap"
  a, c
  var d = "ant",
    f = "awk"
  c, a, b, f, d
  console.log(d), console.log(a)
  return { Y6kJ: {} }
})
