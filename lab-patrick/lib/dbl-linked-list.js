'use strict';

const Node = require('./node')

const DLL = module.exports = function() {
  this.head=null;
  this.tail = null
  this.length = 0
}

DLL.prototype.append = function(value){
  if(!this.head) return this.tail = this.head = new Node(value)

  this.tail.prev = new Node(value)
  this.tail.prev.next = this.tail
  this.tail = this.tail.prev
  this.length ++
  return this.tail
}
