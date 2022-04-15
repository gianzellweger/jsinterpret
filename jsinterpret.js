#!/usr/bin/env node

const fs = require("fs");
const process = require("process");

const prefixArgs = process.argv[0].includes("node") ? 2 : 1;

if (process.argv.length > prefixArgs) {
    fs.readFile(process.argv[prefixArgs], "binary", function (err, text) {
        if (err) {
            console.log(`Could not read file because: ${err}`);
            process.exit(1);
        }
        eval(text);
    });
} else {
    console.error(`Usage: ${process.argv[prefixArgs - 1]} file`);
    process.exit(1);
}