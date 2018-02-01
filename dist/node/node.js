/* eslint handle-callback-err: "off" */
/* eslint new-cap: "off" */
const Logger = require('../common/logger')
const Rpc = require('./rpc')

/**
 * @class Node
 */
class Node {
  constructor (options = {}) {
    // -- Properties
    /** @type {boolean} */
    this.active = true // TODO: rename to isActive
    /** @type {number} */
    this.latency = 9999 // NOTE: a hack around unverified node been picked up as 'fastest' // Alias: lastLatency
    /** @type {number} */
    this.blockHeight = 0 // NOTE: same as block count
    /** @type {number} */
    this.index = -1 // blockHeight - 1 // TODO: deprecate this
    /** @type {number} */
    this.connections = 0
    /** @type {number} */
    this.age = undefined // TODO: rename to lastSeen
    /** @type {Object} */
    this.rpc = undefined
    /** @type {Object} */
    this.defaultOptions = {
      domain: undefined,
      port: undefined,
      logger: new Logger('Node')
    }

    // -- Bootstrap
    Object.assign(this, this.defaultOptions, options)
    this.rpc = new Rpc(this.domain, this.port)
  }
}

module.exports = Node
