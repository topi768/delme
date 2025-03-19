const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", (line) => {
    input.push(line);
    console.log(line);

    if (input.length === Number(input[0].split(" ")[1]) + 1) {
        rl.close();
    }
}).on("close", () => {
    const [s, n] = input[0].split(" ").map(Number);
    const numbers = input.slice(1).map(Number);

    console.log("s:", s);
    console.log("n:", n);
    console.log("Числа:", numbers);
});
