// external dependencies
let events = require('events');
let util = require('util');

// internal dependencies
let prototypeBase = require('../prototype_base.js');
let curry = require('../curry.js');

function Batchcode() {
  this.prefix = 'batchcode.';
}
util.inherits(Batchcode, events.EventEmitter);

// prototypes we will be applying
let protos = {
  batchcode: {
    mandatory: 'shipmentId,sku,batchId,templateId'
  }
};

// creating prototypes using curry func
for (let key in protos) {
  Batchcode.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = Batchcode;
