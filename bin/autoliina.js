#!/usr/bin/env node

const [,, cmd, ...args] = process.argv;

switch (cmd) {
  case "convert":
    require('../lib/convert')(args);
    break;
  case "substack":
    require('../lib/substack')(args);
    break;
  case "linkedin":
    require('../lib/linkedin')(args);
    break;
  default:
    console.log("Unknown command:", cmd);
}