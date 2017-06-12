const DLL = require('./dbl-linked-list');
const Node = require('./node')

'use strict';

const HashTable = module.exports = function(size = 12){
  this.size = size
  this.buckets = [...Array(this.size)]
}
// O(n)
HashTable.prototype.hashKey = function(key){
  let hash = key.split('').reduce((acc, curr)=> acc + curr.charCodeAt(0), 0) % this.size
  return hash
}
// O(n)
HashTable.prototype.set = function(key, value){
  if(this.buckets[this.hashKey(key)]){
    let temp =this.buckets[this.hashKey(key)]
    temp.append(new Node(value))
    return temp
  }
  this.buckets[this.hashKey(key)] = new DLL(new Node(value))

}
// O(n)
HashTable.prototype.get = function(key){
  console.log(this.buckets[this.hashKey(key)])
  return this.buckets[this.hashKey(key)]
}
// O(log n)
HashTable.prototype.remove = function(key){
  let address = this.hashKey(key)
  console.log('------DELETED------', this.buckets[this.hashKey(key)])
  this.buckets[address] ? delete this.buckets[address]: new Error('key invalid')
}

let newHashTable = new HashTable();
newHashTable.set('a', 'a')
newHashTable.set('a', 'b')
newHashTable.set('a', 'c')
newHashTable.get('a')
// newHashTable.remove('b')
// console.log(newHashTable.buckets[1]);
// console.log(newHashTable.buckets);
