/**
 * 
Garbage collection in JavaScript is the automatic process by which the JavaScript engine deallocates memory that is no longer in use or reachable by the program. In JavaScript, memory management is handled automatically by the engine, typically using a garbage collector. Garbage collection helps prevent memory leaks and ensures efficient memory usage within JavaScript applications.

Here's how garbage collection works in JavaScript:

Mark-and-Sweep Algorithm: Most modern JavaScript engines, like V8 in Chrome or SpiderMonkey in Firefox, use a variant of the Mark-and-Sweep algorithm for garbage collection.

Mark Phase: In this phase, the garbage collector traverses the entire object graph, starting from the root (global object or window object in the case of browser environments), and marks all objects that are reachable.

Sweep Phase: In this phase, the garbage collector iterates over all allocated memory and deallocates memory for objects that were not marked as reachable during the mark phase. These objects are considered garbage and can be safely reclaimed.

Memory Reclamation: The memory reclaimed during the sweep phase is made available for future allocations. This process ensures that memory is used efficiently and that resources are not leaked over time.

Example:

// Creating circular references
let obj1 = {};
let obj2 = {};
obj1.ref = obj2;
obj2.ref = obj1;

// Both objects are now unreachable by the program
obj1 = null;
obj2 = null;

// Garbage collection will reclaim memory for the circularly referenced objects
In this example, obj1 and obj2 form a circular reference, meaning they reference each other. After setting both variables to null, the circularly referenced objects are no longer reachable by the program. As a result, the garbage collector can reclaim the memory allocated for these objects.

Garbage Collection Triggers:
Automatic Trigger: Garbage collection is automatically triggered by the JavaScript engine when it determines that it's necessary to free up memory. The engine employs various heuristics to determine when to initiate garbage collection.

Manual Trigger: Some JavaScript engines provide mechanisms for manually triggering garbage collection, though this is typically not recommended as it can impact performance and is often unnecessary.

Importance of Garbage Collection:
Prevents Memory Leaks: Garbage collection ensures that memory allocated to objects that are no longer in use is reclaimed, preventing memory leaks.

Improves Performance: Efficient garbage collection improves the performance of JavaScript applications by managing memory allocation and deallocation automatically.

Simplifies Memory Management: Developers do not need to manually manage memory allocation and deallocation, reducing the likelihood of bugs related to memory management.

Overall, garbage collection is a crucial aspect of JavaScript's memory management system, ensuring efficient memory usage and preventing memory leaks in applications.






 */