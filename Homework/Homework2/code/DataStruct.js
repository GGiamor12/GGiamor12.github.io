//Array
/**
JavaScript have the array, for initialize the array, we can use the following code:
*/
var arr = new Array();
var arr = new Array(1,2,3,4,5);
console.log(arr);

//List
/**
JavaScript have the list, for initialize the list, we can use the following code:
*/
var list = [];
var list = [1,2,3,4,5];
console.log(list);

//Dictionary
/**
JavaScript have the dictionary, for initialize the dictionary, we can use the following code:
*/
var dict = {};
var dict = {"a":1,"b":2,"c":3};
console.log(dict);

//sorted list
/**
JavaScript haven't the sorted list, for initialize the sorted list, we can create a class to implement it:
*/

class SortedList{
    constructor(list){
        this.list = list.sort();

    }

    add(item){
        this.list.push(item);
        this.list.sort();
    
    }

    remove(item){
        this.list.splice(this.list.indexOf(item),1);
    
    }

    clear(){
        this.list = [];
    
    }
}

var sortedList = new SortedList([1,4,2,6,3]);
console.log(sortedList.list);

//HashSet
/**
JavaScript have the HashSet, for initialize the HashSet, we can call a class to implement it:
*/

const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add(2);
mySet.add(3);

console.log(mySet);

//sorted HashSet
/**
JavaScript haven't the sorted HashSet, for initialize the sorted HashSet, we can create a class to implement it:
*/

class SortedSet{

    constructor(value = NaN){
        this.list = [];
        this.list.push(value);
        this.list.sort();

        this.set = new Set();
        for (var i = 0; i < this.list.length; i++) {
            this.set.add(this.list[i]);
        }
            
    }

    add(item){
        this.list.push(item);
        this.list.sort();
        for (var i = 0; i < this.list.length; i++) {
            this.set.add(this.list[i]);
        }
    
    }

    remove(item){
        this.list.splice(this.list.indexOf(item),1);
        this.set.delete(item);
    
    }

    
}

//queue
/**
JavaScript haven't the queue, for initialize the queue, we can call a class to implement it:
*/

class Queue{
    constructor(value = NaN){
        this.list = [value];
    }

    enqueue(item){
        this.list.push(item);
    }

    dequeue(){
        this.list.shift();
    }

    clear(){
        this.list = [];
    }

}

//stack
/**
JavaScript have the stack, for initialize the stack, we can call a class to implement it:
*/


const stack = [];


stack.push(1);
stack.push(2);
stack.push(3);


const elementoRimosso = stack.pop(); 

console.log(elementoRimosso); 
console.log(stack); 

//Linked link
/**
JavaScript haven't the linked link, for initialize the linked link, we can create a class to implement it:
*/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    }
  
    delete(value) {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        if (!this.head) {
          this.tail = null;
        }
        return;
      }
  
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          if (!current.next) {
            this.tail = current;
          }
          return;
        }
        current = current.next;
      }
    }
  
    find(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }

const myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.append(3);

myList.prepend(0);

myList.delete(2);

const foundNode = myList.find(3);

console.log(foundNode.value); 


