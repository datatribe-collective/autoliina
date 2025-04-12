#!/usr/bin/env node

const { execSync } = require("child_process");
const [,, cmd, ...args] = process.argv;

switch (cmd) {
  case "convert":
    execSync(`bash lib/convert.sh ${args.join(" ")}`, { stdio: "inherit" });
    break;
  case "substack":
    execSync(`bash lib/substack.sh ${args.join(" ")}`, { stdio: "inherit" });
    break;
  case "linkedin":
    execSync(`bash lib/linkedin.sh ${args.join(" ")}`, { stdio: "inherit" });
    break;
  default:
    console.log("Unknown command:", cmd);
}
