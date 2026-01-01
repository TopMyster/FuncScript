#!/usr/bin/env node
import cmd from "./cmd.js";

cmd.vars.decl('name')
cmd.vars.set('name', 'top')
cmd.doc.log(cmd.vars.get('name'))

