export const head   = ([a])      => a
export const first  = ([a])      => a
export const second = ([,a])     => a
export const third  = ([,,a])    => a
export const fourth = ([,,,a])   => a
export const body   = (arr)      => arr.slice(0, arr.length - 1)
export const last   = arr        => arr[arr.length - 1]
export const tail   = ([, ...t]) => t
export const empty  = (arr=[])   => !arr.length

export const apply   = (a, b) => b(a)
export const compose = (a, b) => a(b)
export const bind    = (val, fns=[]) => fns.reduce(apply, val)

export const zip = (l1=[], l2=[], fn=(...ab)=>ab, result=[]) =>
  (empty(l1) || empty(l2))
    ? result
    : zip(tail(l1), tail(l2), fn, [...result, fn(head(l1), head(l2))])

export const times = (count, d=null, result=[]) =>
  !count
    ? result
    : times(count - 1, d, [...result, d])

export const take = (keys=[], obj, result=[]) =>
  empty(keys)
    ? result
    : take(tail(keys), obj, [...result, obj[first(keys)]])

export const cast  = (key, fn) => (...args) => ({ [key]: fn(...args) })
export const casts = (val, cx=[]) => cx.reduce((acc, fn) => ({ ...acc, ...fn(val) }), {})

export const _w = str => String(str).split(" ")
export const _s = str => new Set(String(str).split(" "))
