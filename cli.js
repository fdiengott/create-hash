#!/usr/bin/env node

const readlineSync = require("readline-sync");
const { createHash, randomBytes, scryptSync } = require("crypto");

const [, , ...args] = process.argv;

const password = args[0];
const isSaltedResp = readlineSync.question(
  "Do you want a salted password? (Y/n): "
);

const isSalted = isSaltedResp === "" || isSaltedResp === "y";

const salt = randomBytes(16).toString("base64");
const hash = isSalted
  ? salt + ":" + scryptSync(password, salt, 64).toString("base64")
  : createHash("sha256").update(password).digest("base64");

console.log(hash);
