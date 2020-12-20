const path = require("path");
module.exports = {
    testTimeout: 30000,
    bail: 5,
    "moduleDirectories": [
        "node_modules"
    ],
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    setupFiles: ["./tests/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|mjs)$": "./tests/jest-transformer.js"
    },
    verbose: true,
    collectCoverage: true
}
