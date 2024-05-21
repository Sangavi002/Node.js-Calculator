// Importing the crypto module
const crypto = require('crypto');

// Retrieving command line arguments
const argv = process.argv.slice(2);
const operation = argv[0];

// Function to generate a random number of the desired length
function generateRandomNumber(length) {
    // Check if length is provided
    if (!length) {
        console.log("Provide length for random number generation.");
        return;
    }
    // Generate random bytes and convert to string
    const randomBytes = crypto.randomBytes(length).toString('binary');
    console.log(randomBytes);
}

// Switch statement to perform the appropriate calculation
switch (operation) {
    case 'add':
        // Perform addition
        const addArgv = argv.slice(1).map(Number);
        console.log(addArgv.reduce((acc, val) => acc + val, 0));
        break;
    case 'sub':
        // Perform subtraction
        const subArgv = argv.slice(1).map(Number);
        console.log(subArgv.reduce((acc, val) => acc - val));
        break;
    case 'mult':
        // Perform multiplication
        const multArgv = argv.slice(1).map(Number);
        console.log(multArgv.reduce((acc, val) => acc * val, 1));
        break;
    case 'divide':
        // Perform division
        const divideArgv = argv.slice(1).map(Number);
        console.log(divideArgv.reduce((acc, val) => acc / val));
        break;
    case 'sin':
        // Perform sine operation
        const sinArg = Number(argv[1]);
        console.log(Math.sin(sinArg));
        break;
    case 'cos':
        // Perform cosine operation
        const cosArg = Number(argv[1]);
        console.log(Math.cos(cosArg));
        break;
    case 'tan':
        // Perform tangent operation
        const tanArg = Number(argv[1]);
        console.log(Math.tan(tanArg));
        break;
    case 'random':
        // Generate random number
        const randomLength = Number(argv[1]);
        generateRandomNumber(randomLength);
        break;
    default:
        console.log("Invalid operation");
}
