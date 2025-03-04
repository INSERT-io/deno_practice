const args = Deno.args;

if (args.length !== 3) {
  console.error("Usage: calc --add|--sub|--mul|--div <num1> <num2>");
  Deno.exit(1);
}

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Both arguments must be numbers");
  Deno.exit(1);
}

let result: number;

switch (operation) {
  case "--add":
    result = num1 + num2;
    break;
  case "--sub":
    result = num1 - num2;
    break;
  case "--mul":
    result = num1 * num2;
    break;
  case "--div":
    if (num2 === 0) {
      console.error("Cannot divide by zero");
      Deno.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error("Unknown operation");
    Deno.exit(1);
}

console.log(`Result: ${result}`);
