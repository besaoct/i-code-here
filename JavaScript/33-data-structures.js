// In JavaScript, data structures can be broadly categorized into two main types based on how they organize and store data: indexed collections and keyed collections.



// Let's go through each of the data structures you mentioned along with their definitions and examples:

// ### 1. Indexed Collections:
// Indexed collections are data structures where elements are accessed using numerical indices. Examples include typed arrays and arrays.

// - **Typed Arrays:**
//   - Typed arrays are arrays where each element is of a fixed-size and a specific numeric data type.
//   - They are useful for working with binary data and performing low-level operations efficiently.
  
//   **Example:**

//   ```javascript
//   // Creating a typed array of 5 integers
//   const intArray = new Int32Array([1, 2, 3, 4, 5]);
  
//   console.log(intArray[2]); // Output: 3
//   ```
  
// - **Arrays:**
//   - Arrays are JavaScript's built-in indexed collections that can hold multiple values of any type.
//   - They are dynamic in size and can store elements of different data types.

//   **Example:**
//   ```javascript
//   // Creating an array of strings
//   const colors = ['red', 'green', 'blue'];
  
//   console.log(colors[1]); // Output: green
//   ```

// ### 2. Keyed Collections:
// Keyed collections are data structures where elements are stored and accessed using keys rather than numerical indices. Examples include maps, weak maps, sets, and weak sets.

// - **Map:**
//   - Maps are collections of key-value pairs where each key can be of any data type, and keys are unique within the map.
//   - They provide efficient methods for adding, removing, and retrieving elements based on keys.

//   **Example:**
//   ```javascript
//   // Creating a map
//   const myMap = new Map();
  
//   // Adding key-value pairs
//   myMap.set('name', 'John');
//   myMap.set('age', 30);
  
//   console.log(myMap.get('name')); // Output: John
//   ```

// - **WeakMap:**
//   - WeakMaps are similar to maps but hold weak references to the keys, allowing garbage collection to remove keys that are no longer referenced elsewhere in the program.
//   - They are useful for associating metadata with objects without preventing their garbage collection.

// - **Set:**
//   - Sets are collections of unique values where each value can only occur once.
//   - They provide methods for adding, removing, and checking for the presence of elements efficiently.

//   **Example:**
//   ```javascript
//   // Creating a set of numbers
//   const mySet = new Set([1, 2, 3, 4, 5]);
  
//   mySet.add(6);
//   console.log(mySet.has(3)); // Output: true
//   ```

// - **WeakSet:**
//   - WeakSets are similar to sets but hold weak references to the values, allowing garbage collection to remove values that are no longer referenced elsewhere in the program.

// ### 3. Structured Data:
// Structured data refers to data organized in a specific format or structure. In JavaScript, structured data is often represented using JSON (JavaScript Object Notation).

// - **JSON (JavaScript Object Notation):**
//   - JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.
//   - It consists of key-value pairs where keys are strings and values can be strings, numbers, arrays, objects, booleans, or null.

//   **Example:**
//   ```json
//   {
//     "name": "John",
//     "age": 30,
//     "isStudent": false,
//     "address": {
//       "city": "New York",
//       "zipCode": "10001"
//     },
//     "hobbies": ["reading", "swimming"]
//   }
//   ```

// In summary, indexed collections like arrays and typed arrays allow you to access elements using numerical indices, while keyed collections like maps, sets, and their weak counterparts allow you to store and access elements using keys. Structured data, represented by JSON, provides a way to organize and exchange data in a standardized format. Each of these data structures has its own use cases and benefits, and choosing the right one depends on the specific requirements of your application.
