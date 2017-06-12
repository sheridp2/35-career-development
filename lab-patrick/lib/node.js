'use strict';
const Node = module.exports = function(value, next=null, prev=null){
  this.value = value
  this.next = next
  this.prev = prev
}
