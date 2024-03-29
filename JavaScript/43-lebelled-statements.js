// Labelled statements in JavaScript allow you to label a statement, such as a loop or a block, with an identifier. This identifier can then be used as a target for break or continue statements to control the flow of execution within nested loops or blocks.

// Here's the syntax for labelled statements:


// labelName: statement
// labelName: An identifier followed by a colon (:), which serves as the label for the statement.
// statement: Any valid JavaScript statement, such as a loop (for, while, do-while) or a block ({ ... }).
// Example:

outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Breaks out of the outer loop
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}



// In this example:

// The outerLoop label is applied to the for loop that iterates over the variable i.
// The innerLoop label is applied to the nested for loop that iterates over the variable j.
// When the condition i === 1 && j === 1 is met, the break outerLoop; statement is executed, causing the program flow to break out of the outer loop entirely.
// Labelled statements are not commonly used in JavaScript, but they can be useful in certain situations, particularly when dealing with nested loops and needing to control the flow of execution more precisely. However, they can also make code harder to read and understand, so it's important to use them judiciously.