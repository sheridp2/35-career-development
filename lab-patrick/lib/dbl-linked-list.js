'use strict';

const Node = require('./node')

const DLL = module.exports = function(value) {
  this.head= value || null;
  this.tail = value || null
  this.length = 0
}

DLL.prototype.append = function(value){
  if(!this.head) return this.tail = new Node(value)

  this.tail.next = new Node(value)
  this.tail.next.prev = this.tail
  this.tail = this.tail.next
  this.length ++
  return this.tail
}
