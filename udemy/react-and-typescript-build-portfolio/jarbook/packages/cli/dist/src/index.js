"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const run_1 = require("../commands/run");
commander_1.program.addCommand(run_1.runCommand);
commander_1.program.parse(process.argv);
