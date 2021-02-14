const path = require("path");
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ["./setupTests.ts"],
    transform: {
        "^.+\\.(js|tsx|mjs)$": "./jest-transformer.js"
    },
    verbose: true,
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
}
