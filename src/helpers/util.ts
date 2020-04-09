/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-09 17:08:27
 * @Description:
 */
const toSting = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toSting.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
