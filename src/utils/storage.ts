
const data: Object = {}

const handle: ProxyHandler<Object> = {
  get(target, p) {
    const key = p.toString()
    return window.localStorage.getItem(key)
  },
  set(target, p, newValue) {
    const key = p.toString()
    target
    window.localStorage.setItem(key, newValue)
    return true
  },
  deleteProperty(target, p) {
    const key = p.toString()
    window.localStorage.removeItem(key)
    return true
  },
}

const storageWarehouse = new Proxy(data, handle)


export { storageWarehouse }