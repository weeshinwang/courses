"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const open_1 = require("./commands/open");
commander_1.program.addCommand(open_1.openCommand);
commander_1.program.parse(process.argv);
