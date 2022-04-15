/*
    If your package.json file contains "type": "module", which causes Node to assume modules are in es6 format, 
    you can convert the above to es6 format by replacing the top line to export default { .)
*/
module.exports = {
//export default {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
