
A **`Presponse`** object is a [Promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to a [Response](/en-US/docs/Web/API/Response).

## Fetch

The `Presponse` is primarily obtained from calling fetch.

```js
const preponse = fetch('https://example.com');
```
⠀

#### Generating a range of values
The keys of an array are a sequence of numbers starting with 0. Using this with an iterator lets us create a range of values.

⠀

Simply put:
```js
const range = [...Array(3).keys()];
console.log(range);//[0,1,2]
```

⠀

For a generalized range:
```js
const makeRange = (start,end) => {
  const dif = end - start;
  const range = [...Array(dif + 1).keys()];
  return range.map(x => x + start);
}

makeRange(3,7);//[3,4,5,6,7]
```
⠀

#### Advanced Usage: Copy an Iterator
Typically when iterating through values, the iterator is consumed in the process.

```js
const arr = [1,2,3];
const arrIter = arr.values();
const arrIterCopy = arrIter;
console.log([...arrIter]);//[1,2,3]
console.log([...arrIterCopy]);//[]
```

⠀

To get an actual copy we need to create another iterator from the source
```js
const arr = [1,2,3];
const arrIter = arr.values();
const arrIterCopy = arr.values();
console.log([...arrIter]);//[1,2,3]
console.log([...arrIterCopy]);//[1,2,3]
```

⠀

In scenarios where a reference to the original array is not available, there are methods to copy an array iterator without consuming it. 
```js
const copyArrIter = function copyArrIter(arrIter){
  // Method used to redefine object properties
  const objDefProp = (obj, prop, def) => Object.defineProperty(obj, prop, {
    value: def,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  // Creating an array temporarily consumes the original array iterator
  const arr = [...arrIter];
  // Create a copy to replace the consumed iterator
  const newArrIter = arr.values();
  // By replacing next and Symbol.iterator, the original is effectively restored
  objDefProp(arrIter, "next", function next() {
    return newArrIter.next();
  });
  objDefProp(arrIter, Symbol.iterator, function iterator() {
    return newArrIter;
  });
  // Return a copy using the reference array
  return arr.values();
}

const arrIter = [1,2,3,4].values();
const arrIterCopy = copyArrIter(arrIter);
console.log([...arrIter]);//[1,2,3,4]
console.log([...arrIterCopy]);//[1,2,3,4]
```
This method works on `Array Iterators` that are finite but this is very inefficient both in terms of speed and memory. To copy infinite or very large iterators, use a [generator function](/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).
