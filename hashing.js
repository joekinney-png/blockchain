const SHA256 = require("crypto-js/sha256");

// hashed value does not change
const data1 = "Blockchain Rock!";

// hash changes roughly every second that we run the program
// this is because the stringified version of the object changes every second
const dataObject = {
  id: 1,
  body: "With Object Works too",
  time: new Date().getTime().toString().slice(0, -3),
};

function generateHash(obj) {
  const objStr = JSON.stringify(obj);
  const hashedVal = SHA256(objStr);
  return hashedVal;
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("********");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);
