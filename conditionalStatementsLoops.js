const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let temperature = 18

if (temperature < 0) {
    console.log("It's freezing!")
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.")
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.")
} else {
    console.log("It's warm.")
}

switch (true) {
    case temperature < 0:
        console.log("Switch: It's freezing!")
        break

    case temperature >= 0 && temperature <= 15:
        console.log("Switch: It's cold.")
        break

    case temperature >= 16 && temperature <= 25:
        console.log("Switch: It's mild.")
        break

    default:
        console.log("Switch: It's warm.")
}

let number = 12

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.")
} else if (number % 2 === 0) {
    console.log("Divisible by 2.")
} else if (number % 3 === 0) {
    console.log("Divisible by 3.")
} else {
    console.log("Not divisible by 2 or 3.")
}

switch (true) {
    case number % 2 === 0 && number % 3 === 0:
        console.log("Switch: Divisible by both.")
        break

    case number % 2 === 0:
        console.log("Switch: Divisible by 2.")
        break

    case number % 3 === 0:
        console.log("Switch: Divisible by 3.")
        break

    default:
        console.log("Switch: Not divisible by 2 or 3.")
}

for (let i = 1; i <= 10; i++) {
    console.log("For 1-10: " + i)
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even: " + i)
    }
}

let total = 0
for (let i = 1; i <= 100; i++) {
    total += i
}
console.log("Sum 1-100: " + total)

const numbers1 = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers1.length; i++) {
    console.log("Array value: " + numbers1[i])
}

const numbers2 = [3, 7, 2, 5, 10, 6]
let largest = numbers2[0]

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i]
    }
}

console.log("Largest: " + largest)

let i = 1
while (i <= 10) {
    console.log("While 1-10: " + i)
    i++
}

let j = 1
while (j <= 20) {
    if (j % 2 === 0) {
        console.log("While even: " + j)
    }
    j++
}

let k = 1
let sum = 0
while (k <= 100) {
    sum += k
    k++
}
console.log("While sum 1-100: " + sum)

let m = 1
while (m < 50) {
    if (m % 5 === 0) {
        console.log("Multiple of 5: " + m)
    }
    m++
}

let a = 1
do {
    console.log("DoWhile 1-10: " + a)
    a++
} while (a <= 10)

do {
    totalSum += b
    b++
} while (b <= 100)

console.log("DoWhile sum: " + totalSum)

function askNumber() {
    rl.question("Enter a number greater than 10: ", (input) => {
        let num = Number(input)

        if (num <= 10) {
            console.log("Try again...")
            askNumber()
        } else {
            console.log("Valid number: " + num)
            guessGame()
        }
    })
}

let secretNumber = 7

function guessGame() {
    rl.question("Guess a number between 1 and 10: ", (input) => {
        let guess = Number(input)

        if (guess === secretNumber) {
            console.log("Correct! You guessed it.")
            rl.close()
        } else {
            console.log("Wrong, try again.")
            guessGame()
        }
    })
}

askNumber()