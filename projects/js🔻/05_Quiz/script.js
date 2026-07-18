document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const rule = document.getElementById("rule");

    const questions = [
        {
            question:
                "Which keyword is used to declare a block-scoped variable in JavaScript?",
            choices: ["var", "let", "const", "static"],
            answer: "let",
        },
        {
            question:
                "Which method is used to add an element at the end of an array?",
            choices: ["push()", "pop()", "shift()", "unshift()"],
            answer: "push()",
        },
        {
            question:
                "Which operator is used for strict equality comparison in JavaScript?",
            choices: ["==", "=", "===", "!="],
            answer: "===",
        },
        {
            question: "What is the output type of typeof null?",
            choices: ["null", "object", "undefined", "boolean"],
            answer: "object",
        },
        {
            question:
                "Which method converts a JSON string into a JavaScript object?",
            choices: [
                "JSON.stringify()",
                "JSON.parse()",
                "JSON.convert()",
                "JSON.object()",
            ],
            answer: "JSON.parse()",
        },
        // {
        //     question: "Which loop is guaranteed to execute at least once?",
        //     choices: ["for", "while", "do...while", "for...of"],
        //     answer: "do...while",
        // },
        // {
        //     question: "Which method removes the last element from an array?",
        //     choices: ["shift()", "slice()", "pop()", "splice()"],
        //     answer: "pop()",
        // },
        // {
        //     question: "Which value is considered falsy in JavaScript?",
        //     choices: ["{}", "[]", "0", "'0'"],
        //     answer: "0",
        // },
        // {
        //     question: "Which function is used to delay code execution?",
        //     choices: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        //     answer: "setTimeout()",
        // },
        // {
        //     question:
        //         "Which array method creates a new array by applying a function to each element?",
        //     choices: ["filter()", "map()", "reduce()", "forEach()"],
        //     answer: "map()",
        // },
        // {
        //     question:
        //         "Which method is used to convert a JavaScript object into a JSON string?",
        //     choices: [
        //         "JSON.parse()",
        //         "JSON.stringify()",
        //         "JSON.convert()",
        //         "JSON.object()",
        //     ],
        //     answer: "JSON.stringify()",
        // },
        // {
        //     question: "Which keyword is used to stop a loop immediately?",
        //     choices: ["continue", "stop", "break", "return"],
        //     answer: "break",
        // },
        // {
        //     question:
        //         "Which array method returns the first element that matches a condition?",
        //     choices: ["find()", "filter()", "map()", "includes()"],
        //     answer: "find()",
        // },
        // {
        //     question:
        //         "Which method checks whether an array contains a specific value?",
        //     choices: ["contains()", "has()", "includes()", "exists()"],
        //     answer: "includes()",
        // },
        // {
        //     question: "Which keyword is used to define a constant variable?",
        //     choices: ["let", "var", "const", "final"],
        //     answer: "const",
        // },
        // {
        //     question:
        //         "Which symbol is used for single-line comments in JavaScript?",
        //     choices: ["<!-- -->", "/* */", "//", "#"],
        //     answer: "//",
        // },
        // {
        //     question:
        //         "Which method combines all elements of an array into a string?",
        //     choices: ["join()", "concat()", "merge()", "combine()"],
        //     answer: "join()",
        // },
        // {
        //     question: "What is the result of typeof [] in JavaScript?",
        //     choices: ["array", "object", "list", "undefined"],
        //     answer: "object",
        // },
        // {
        //     question:
        //         "Which method is used to remove the first element of an array?",
        //     choices: ["pop()", "shift()", "splice()", "slice()"],
        //     answer: "shift()",
        // },
        // {
        //     question:
        //         "Which keyword is used to create a function in JavaScript?",
        //     choices: ["func", "method", "function", "define"],
        //     answer: "function",
        // },
        // {
        //     question: "What will typeof NaN return?",
        //     choices: ["number", "NaN", "undefined", "object"],
        //     answer: "number",
        // },
        // {
        //     question: "Which method creates a shallow copy of an array?",
        //     choices: ["slice()", "splice()", "copy()", "assign()"],
        //     answer: "slice()",
        // },
        // {
        //     question: "Which operator returns the first truthy value?",
        //     choices: ["&&", "||", "??", "?:"],
        //     answer: "||",
        // },
        // {
        //     question: "What is the output of [] == false?",
        //     choices: ["true", "false", "undefined", "Error"],
        //     answer: "true",
        // },
        // {
        //     question:
        //         "Which method is used to merge arrays without modifying the originals?",
        //     choices: ["concat()", "push()", "splice()", "join()"],
        //     answer: "concat()",
        // },
        // {
        //     question: "Which keyword creates block scope?",
        //     choices: ["var", "let", "const", "Both let and const"],
        //     answer: "Both let and const",
        // },
        // {
        //     question:
        //         "Which method removes elements from an array and returns them?",
        //     choices: ["slice()", "splice()", "filter()", "shift()"],
        //     answer: "splice()",
        // },
        // {
        //     question: "Which keyword refers to the current object?",
        //     choices: ["self", "this", "current", "object"],
        //     answer: "this",
        // },
        // {
        //     question: "Which function converts a string into an integer?",
        //     choices: ["Number()", "parseInt()", "parseFloat()", "toInt()"],
        //     answer: "parseInt()",
        // },
        // {
        //     question: "What does the spread operator (...) do for arrays?",
        //     choices: [
        //         "Copies/expands elements",
        //         "Deletes elements",
        //         "Sorts elements",
        //         "Reverses elements",
        //     ],
        //     answer: "Copies/expands elements",
        // },
        // {
        //     question:
        //         "Which method executes a function for every array element without returning a new array?",
        //     choices: ["map()", "filter()", "forEach()", "reduce()"],
        //     answer: "forEach()",
        // },
        // {
        //     question:
        //         "Which method returns a new array containing only matching elements?",
        //     choices: ["find()", "filter()", "map()", "every()"],
        //     answer: "filter()",
        // },
        // {
        //     question: "Which array method reduces an array to a single value?",
        //     choices: ["reduce()", "map()", "find()", "flat()"],
        //     answer: "reduce()",
        // },
        // {
        //     question: "What is a closure in JavaScript?",
        //     choices: [
        //         "A function with access to its outer scope",
        //         "A loop",
        //         "An object",
        //         "A callback",
        //     ],
        //     answer: "A function with access to its outer scope",
        // },
        // {
        //     question: "Which keyword is used to create a class?",
        //     choices: ["constructor", "object", "class", "prototype"],
        //     answer: "class",
        // },
        // {
        //     question: "Which keyword inherits from another class?",
        //     choices: ["extends", "implements", "super", "inherits"],
        //     answer: "extends",
        // },
        // {
        //     question: "Which keyword calls the parent constructor?",
        //     choices: ["this", "super", "parent", "base"],
        //     answer: "super",
        // },
        // {
        //     question: "Promises have how many states?",
        //     choices: ["2", "3", "4", "5"],
        //     answer: "3",
        // },
        // {
        //     question: "Which Promise state indicates successful completion?",
        //     choices: ["Rejected", "Resolved", "Fulfilled", "Pending"],
        //     answer: "Fulfilled",
        // },
        // {
        //     question: "Which keyword waits for a Promise to resolve?",
        //     choices: ["wait", "yield", "async", "await"],
        //     answer: "await",
        // },
        // {
        //     question: "Which keyword is required before using await?",
        //     choices: ["promise", "function", "async", "return"],
        //     answer: "async",
        // },
        // {
        //     question:
        //         "Which method executes multiple promises in parallel and fails if one rejects?",
        //     choices: [
        //         "Promise.all()",
        //         "Promise.any()",
        //         "Promise.resolve()",
        //         "Promise.race()",
        //     ],
        //     answer: "Promise.all()",
        // },
        // {
        //     question:
        //         "Which Promise method resolves as soon as one promise fulfills?",
        //     choices: [
        //         "Promise.all()",
        //         "Promise.any()",
        //         "Promise.race()",
        //         "Promise.finally()",
        //     ],
        //     answer: "Promise.any()",
        // },
        // {
        //     question:
        //         "Which Promise method settles after the first promise finishes?",
        //     choices: [
        //         "Promise.race()",
        //         "Promise.any()",
        //         "Promise.all()",
        //         "Promise.allSettled()",
        //     ],
        //     answer: "Promise.race()",
        // },
        // {
        //     question:
        //         "Which method returns results of all promises regardless of success or failure?",
        //     choices: [
        //         "Promise.all()",
        //         "Promise.allSettled()",
        //         "Promise.any()",
        //         "Promise.resolve()",
        //     ],
        //     answer: "Promise.allSettled()",
        // },
        // {
        //     question: "What does the optional chaining operator (?.) prevent?",
        //     choices: [
        //         "Syntax errors",
        //         "Reference errors",
        //         "Type errors on null/undefined",
        //         "Infinite loops",
        //     ],
        //     answer: "Type errors on null/undefined",
        // },
        // {
        //     question:
        //         "What does the nullish coalescing operator (??) check for?",
        //     choices: [
        //         "Falsy values",
        //         "Null or undefined",
        //         "Empty strings",
        //         "Zero",
        //     ],
        //     answer: "Null or undefined",
        // },
        // {
        //     question:
        //         "Which object stores key-value pairs with keys of any type?",
        //     choices: ["Map", "Set", "WeakSet", "Array"],
        //     answer: "Map",
        // },
        // {
        //     question: "Which object stores only unique values?",
        //     choices: ["Map", "Object", "Set", "WeakMap"],
        //     answer: "Set",
        // },
        // {
        //     question:
        //         "Which method checks whether every array element satisfies a condition?",
        //     choices: ["some()", "every()", "find()", "filter()"],
        //     answer: "every()",
        // },
        // {
        //     question:
        //         "Which method checks whether at least one array element satisfies a condition?",
        //     choices: ["every()", "find()", "some()", "reduce()"],
        //     answer: "some()",
        // },
        // {
        //     question: "Which method flattens nested arrays by one level?",
        //     choices: ["flat()", "flatten()", "reduce()", "join()"],
        //     answer: "flat()",
        // },
        // {
        //     question:
        //         "Which method transforms and flattens an array in one step?",
        //     choices: ["map()", "flat()", "flatMap()", "reduce()"],
        //     answer: "flatMap()",
        // },
        // {
        //     question: "What is event bubbling?",
        //     choices: [
        //         "Event travels from child to parent",
        //         "Event travels from parent to child",
        //         "Event stops immediately",
        //         "Event is deleted",
        //     ],
        //     answer: "Event travels from child to parent",
        // },
        // {
        //     question: "Which method stops event bubbling?",
        //     choices: [
        //         "preventDefault()",
        //         "stopPropagation()",
        //         "stopEvent()",
        //         "cancel()",
        //     ],
        //     answer: "stopPropagation()",
        // },
        // {
        //     question: "Which method prevents the browser's default action?",
        //     choices: [
        //         "preventDefault()",
        //         "stopPropagation()",
        //         "cancelDefault()",
        //         "abort()",
        //     ],
        //     answer: "preventDefault()",
        // },
        // {
        //     question: "What does 'use strict' enable?",
        //     choices: [
        //         "Strict parsing and error handling",
        //         "Faster execution only",
        //         "Automatic semicolons",
        //         "ES5 compatibility mode",
        //     ],
        //     answer: "Strict parsing and error handling",
        // },
        // {
        //     question: "Which method freezes an object?",
        //     choices: [
        //         "Object.freeze()",
        //         "Object.lock()",
        //         "Object.prevent()",
        //         "Object.seal()",
        //     ],
        //     answer: "Object.freeze()",
        // },
        // {
        //     question:
        //         "Which method prevents adding or removing properties but allows updating existing ones?",
        //     choices: [
        //         "Object.freeze()",
        //         "Object.seal()",
        //         "Object.lock()",
        //         "Object.preventExtensions()",
        //     ],
        //     answer: "Object.seal()",
        // },
        // {
        //     question:
        //         "Which method creates a new object using an existing object as its prototype?",
        //     choices: [
        //         "Object.create()",
        //         "Object.assign()",
        //         "Object.clone()",
        //         "Object.from()",
        //     ],
        //     answer: "Object.create()",
        // },
        // {
        //     question:
        //         "Which operator checks whether a property exists in an object?",
        //     choices: ["exists", "has", "in", "instanceof"],
        //     answer: "in",
        // },
        // {
        //     question: "What does instanceof check?",
        //     choices: [
        //         "Variable type",
        //         "Prototype chain",
        //         "Equality",
        //         "Object keys",
        //     ],
        //     answer: "Prototype chain",
        // },
        // {
        //     question: "Which keyword throws a custom error?",
        //     choices: ["throw", "catch", "error", "raise"],
        //     answer: "throw",
        // },
        // {
        //     question: "Which block always executes after try/catch?",
        //     choices: ["end", "done", "finally", "complete"],
        //     answer: "finally",
        // },
        // {
        //     question:
        //         "Which API schedules a callback before the next browser repaint?",
        //     choices: [
        //         "setTimeout()",
        //         "requestAnimationFrame()",
        //         "setInterval()",
        //         "queueMicrotask()",
        //     ],
        //     answer: "requestAnimationFrame()",
        // },
        // {
        //     question: "Which queue has higher priority in the event loop?",
        //     choices: [
        //         "Macrotask queue",
        //         "Microtask queue",
        //         "Animation queue",
        //         "Callback queue",
        //     ],
        //     answer: "Microtask queue",
        // },
        // {
        //     question: "Which API schedules a microtask?",
        //     choices: [
        //         "queueMicrotask()",
        //         "setTimeout()",
        //         "setInterval()",
        //         "requestAnimationFrame()",
        //     ],
        //     answer: "queueMicrotask()",
        // },
        // {
        //     question: "Which method converts an iterable into an array?",
        //     choices: [
        //         "Array.of()",
        //         "Array.from()",
        //         "Array.create()",
        //         "Array.copy()",
        //     ],
        //     answer: "Array.from()",
        // },
        // {
        //     question:
        //         "What is the default value of 'this' inside an arrow function?",
        //     choices: [
        //         "Window object",
        //         "The calling object",
        //         "Lexically inherited",
        //         "Undefined always",
        //     ],
        //     answer: "Lexically inherited",
        // },
        // {
        //     question:
        //         "Which feature allows unpacking object properties into variables?",
        //     choices: ["Spreading", "Destructuring", "Cloning", "Inheritance"],
        //     answer: "Destructuring",
        // },
        // {
        //     question:
        //         "Which method copies enumerable properties from source objects to a target object?",
        //     choices: [
        //         "Object.assign()",
        //         "Object.copy()",
        //         "Object.clone()",
        //         "Object.merge()",
        //     ],
        //     answer: "Object.assign()",
        // },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener("click", startQuiz);

    restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    });

    function startQuiz() {
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        rule.classList.add("hidden");
        showQuestion();
    }

    function showQuestion() {
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = ""; //clear previous choices
        questions[currentQuestionIndex].choices.forEach((choice) => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click", () => selectAnswer(choice));
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (choice === correctAnswer) {
            score++;
        }
        nextQuestion();
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }
});
