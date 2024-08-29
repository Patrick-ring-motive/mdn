
An **`Array Iterator`** object is an object that conforms to the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) by providing a `next()` method that returns an iterator result object. All built-in iterators inherit from the `Iterator` class. The `Iterator` class provides a [`[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator) method that returns the iterator object itself, making the iterator also [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). It also provides some helper methods for working with iterators.

## Description

The `Array Iterator` is returned by [`Array.prototype.values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values), [`Array.prototype.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys), [`Array.prototype.entries()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries), [`Array.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), [`TypedArray.prototype.values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values), [`TypedArray.prototype.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys), [`TypedArray.prototype.entries()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries), [`TypedArray.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator), and [`arguments[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator). For [`Arrays`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array),  [`[Symbol.iterator]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) is equivalent to [`values`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values). 

Most [Array-Like](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) objects such as [`NodeList`](/en-US/docs/Web/API/NodeList) return an `Array Iterator` from their respective methods `keys()`, `values()`, `entries()`, and `[Symbol.iterator]()`.
  
> **Note:** Some Array-Like objects such as [`HTMLCollection`](/en-US/docs/Web/API/HTMLCollection) do not have a reference to the `Array Iterator` object. 

## Examples

#### Retrieve an `Array Iterator` from Array-Like objects with no iterator methods

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

#### Generating a range of values
The keys of an array are a sequence of numbers starting with 0. Using this with an iterator lets us create a range of values.

Simply put:
```js
const range = [...Array(3).keys()];
console.log(range);//[0,1,2]
```


For a generalized range:
```js
const makeRange = (start,end) => {
  const dif = end - start;
  const range = [...Array(dif + 1).keys()];
  return range.map(x => x + start);
}

makeRange(3,7);//[3,4,5,6,7]
```
