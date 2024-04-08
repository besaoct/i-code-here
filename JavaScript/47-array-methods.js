// Example array
const numbers = [1, 2, 3, 4, 5];

// 1. forEach()
console.log("forEach():");
numbers.forEach(num => console.log(num));

// 2. map()
console.log("\nmap():");
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// 3. filter()
console.log("\nfilter():");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 4. reduce()
console.log("\nreduce():");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 5. some()
console.log("\nsome():");
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber);

// 6. every()
console.log("\nevery():");
const allEvenNumbers = numbers.every(num => num % 2 === 0);
console.log(allEvenNumbers);

// 7. find()
console.log("\nfind():");
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber);

// 8. includes()
console.log("\nincludes():");
const includesThree = numbers.includes(3);
console.log(includesThree);

// 9. indexOf()
console.log("\nindexOf():");
const indexOfFour = numbers.indexOf(4);
console.log(indexOfFour);

// 10. join()
console.log("\njoin():");
const joinedString = numbers.join(", ");
console.log(joinedString);

// 11. slice()
console.log("\nslice():");
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray);

// 12. splice()
console.log("\nsplice():");
numbers.splice(2, 1);
console.log(numbers);

// 13. sort()
console.log("\nsort():");
const sortedArray = numbers.sort((a, b) => a - b);
console.log(sortedArray);

// 14. reverse()
console.log("\nreverse():");
const reversedArray = numbers.reverse();
console.log(reversedArray);


// Example array
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// 15. concat()
console.log("\nconcat():");
const combinedArray = fruits.concat(["pineapple", "strawberry"]);
console.log(combinedArray);

// 16. flat()
console.log("\nflat():");
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);

// 17. map() with index
console.log("\nmap() with index:");
const indexedFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log(indexedFruits);

// 18. findIndex()
console.log("\nfindIndex():");
const indexOfOrange = fruits.findIndex(fruit => fruit === "orange");
console.log(indexOfOrange);

// 19. fill()
console.log("\nfill():");
const filledArray = new Array(5).fill("hello");
console.log(filledArray);

// 20. isArray()
console.log("\nisArray():");
const isArrayResult = Array.isArray(fruits);
console.log(isArrayResult);

// 21. toString()
console.log("\ntoString():");
const fruitsString = fruits.toString();
console.log(fruitsString);

// 22. pop()
console.log("\npop():");
const poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);

// 23. push()
console.log("\npush():");
fruits.push("melon");
console.log(fruits);

// 24. shift()
console.log("\nshift():");
const shiftedFruit = fruits.shift();
console.log(shiftedFruit);
console.log(fruits);

// 25. unshift()
console.log("\nunshift():");
fruits.unshift("cherry");
console.log(fruits);


// 26. slice() (with negative index)
console.log("\nslice() with negative index:");
const slicedArrayNegative = numbers.slice(-3);
console.log(slicedArrayNegative);

// 27. splice() (with adding elements)
console.log("\nsplice() with adding elements:");
numbers.splice(2, 0, 6, 7);
console.log(numbers);

// 28. indexOf() (with starting index)
console.log("\nindexOf() with starting index:");
const indexFromTwo = numbers.indexOf(3, 2);
console.log(indexFromTwo);

// 29. lastIndexOf()
console.log("\nlastIndexOf():");
const lastIndexOfTwo = numbers.lastIndexOf(2);
console.log(lastIndexOfTwo);

// 30. flatMap()
console.log("\nflatMap():");
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flatMappedArray = nestedArrays.flatMap(arr => arr.map(num => num * 2));
console.log(flatMappedArray);

// 31. from()
console.log("\nfrom():");
const arrayFromSet = Array.from(new Set([1, 2, 3, 2, 1]));
console.log(arrayFromSet);

// 32. keys()
console.log("\nkeys():");
const iterator = numbers.keys();
for (const key of iterator) {
    console.log(key);
}

// 33. values()
console.log("\nvalues():");
const valuesIterator = numbers.values();
for (const value of valuesIterator) {
    console.log(value);
}

// 34. entries()
console.log("\nentries():");
const entriesIterator = numbers.entries();
for (const entry of entriesIterator) {
    console.log(entry);
}

// 35. copyWithin()
console.log("\ncopyWithin():");
const copiedArray = [1, 2, 3, 4, 5];
copiedArray.copyWithin(0, 3, 5);
console.log(copiedArray);

// 36. fill() (with start and end index)
console.log("\nfill() with start and end index:");
const filledArrayRange = numbers.fill(0, 1, 4);
console.log(filledArrayRange);

// 37. reverse()
console.log("\nreverse():");
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);

// 38. sort() (with custom comparator)
console.log("\nsort() with custom comparator:");
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);

// 39. findLastIndex()
console.log("\nfindLastIndex():");
const findLastIndex = numbers.findLastIndex(num => num % 2 === 0);
console.log(findLastIndex);

// 40. reduceRight()
console.log("\nreduceRight():");
const reduceRightSum = numbers.reduceRight((acc, num) => acc + num);
console.log(reduceRightSum);

// 41. Array.of()
console.log("\nArray.of():");
const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
console.log(arrayOfNumbers);

// 42. Array.from() (with mapping function)
console.log("\nArray.from() with mapping function:");
const doubledNumbers = Array.from(numbers, num => num * 2);
console.log(doubledNumbers);

// 43. Array.isArray() (with non-array argument)
console.log("\nArray.isArray() with non-array argument:");
const isArray = Array.isArray(numbers);
console.log(isArray);

// 44. flat() (with depth)
console.log("\nflat() with depth:");
const nestedArray1 = [1, [2, [3, [4, [5]]]]];
const flatArray = nestedArray1.flat(3);
console.log(flatArray);

// 45. keys(), values(), entries() (with spread operator)
console.log("\nkeys(), values(), entries() with spread operator:");
console.log([...numbers.keys()]);
console.log([...numbers.values()]);
console.log([...numbers.entries()]);