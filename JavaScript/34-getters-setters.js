
// Getters and setters are special methods in JavaScript that allow you to define property access behavior on objects. They provide a way to control how properties are accessed and modified, enabling you to encapsulate property access and add validation or custom logic.

// Getters:
// A getter is a method that gets called when you access a property. It allows you to compute or derive a value dynamically when the property is accessed.

// Syntax:

// const obj = {
//   get propertyName() {
//     // Compute or derive value dynamically
//     return /* computed value */;
//   }
// };
// Example:


// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
  
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// console.log(person.fullName); // Output: John Doe

// Setters:
// A setter is a method that gets called when you assign a value to a property. It allows you to perform validation, normalization, or trigger side effects when the property is set.

// Syntax:


// const obj = {
//   set propertyName(value) {
//     // Validate or process the value
//     // Optionally, assign the processed value to another property
//   }
// };
// Example:


// const person = {
//   _age: 0, // Private property

//   set age(value) {
//     if (value >= 0 && value <= 120) {
//       this._age = value;
//     } else {
//       console.error('Invalid age');
//     }
//   },

//   get age() {
//     return this._age;
//   }
// };

// person.age = 30;
// console.log(person.age); // Output: 30

// person.age = 150; // Error: Invalid age


// Benefits of Getters and Setters:
// Encapsulation: Getters and setters enable encapsulation by allowing you to control access to properties and hide implementation details.
// Validation: You can enforce validation rules and ensure that only valid values are assigned to properties.
// Computed Properties: Getters enable you to compute or derive property values dynamically.
// Side Effects: Setters allow you to trigger side effects or update other properties when a property is set.

// Considerations:
// It's a common convention in JavaScript to prefix private properties with an underscore (_), indicating that they should not be accessed directly from outside the object.
// Be careful not to create infinite loops when using getters and setters. Accessing or modifying properties within the getter or setter methods can lead to unexpected behavior.
// Getters and setters provide a powerful mechanism for controlling access to object properties and adding behavior to property access and assignment operations. They are widely used in JavaScript to create more robust and maintainable code.