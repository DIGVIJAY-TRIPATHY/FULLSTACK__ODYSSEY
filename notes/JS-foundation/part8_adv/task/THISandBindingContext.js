// Task 1: Bind the Correct Context
const person = {
  name: "Alice",
  introduce: function() {
    return `Hi, my name is ${this.name}`;
  }
};

const boundIntroduce = person.introduce.bind(person);
console.log(boundIntroduce());

// Task 2: Using call() to Invoke a Function with Different Contexts
function introduce() {
  return `Hello, my name is ${this.name}`;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

console.log(introduce.call(person1));
console.log(introduce.call(person2));

// Task 3: Using apply() to Pass Arguments with Context
function sum(a, b) {
  return (a + b) * this.multiplier;
}

const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };

console.log(sum.apply(context1, [4, 6])); // 20
console.log(sum.apply(context2, [4, 6])); // 30
