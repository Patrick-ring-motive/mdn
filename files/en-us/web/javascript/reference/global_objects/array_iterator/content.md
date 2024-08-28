
An **`Array Iterator`** object is an object that conforms to the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) by providing a `next()` method that returns an iterator result object. All built-in iterators inherit from the `Iterator` class. The `Iterator` class provides a [`[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator) method that returns the iterator object itself, making the iterator also [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). It also provides some helper methods for working with iterators.

## Description

The `Array Iterator` is returned by {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator), and [`arguments[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator).

Most [Array-Like](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) objects such as [`NodeList`](/en-US/docs/Web/API/NodeList) return an `Array Iterator` from their respective methods `keys()`, `values()`, `entries()`, and `[Symbol.iterator]()`.
  
> **Note:** Some Array-Like objects such as [`HTMLCollection`](/en-US/docs/Web/API/HTMLCollection) do not have a reference to the `Array Iterator` object. 

How to retrieve an `Array Iterator` from an Array-Like object with that doesn't have it's own iterator methods:

```js
/* Create an HTMLCollection containing all elements in the document */
const collection = document.getElementsByTagName('*');
/* call the array values method with collection as this */
const arrValues = [].values.call(collection);
for (const value of arrValues) {
  console.log(value);
}
/* Also works with the other Array->Iterator methods */
const arrKeys = [].keys.call(collection);
const arrEntries = [].entries.call(collection);
const arrIter = [][Symbol.iterator].call(collection);
```
