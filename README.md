# FuncScript

A lightweight JavaScript library that provides functional utilities for DOM manipulation, variables, math operations, and control flow.

## Installation

```bash
npm install @topmyster/funcscript
```

## Usage

```javascript
import { doc, vars, markup, math } from '@topmyster/funcscript';

// Variables
vars.set('counter', 0);
vars.addVar('counter', 5);
console.log(vars.get('counter')); // 5

// DOM Manipulation
const button = markup.newEl('button', 'myBtn', { class: 'btn' }, 'Click me');
markup.appendEl('app', button);

// Events
doc.event('myBtn', 'click', () => {
    doc.log('Button clicked!');
});

// Conditionals
doc.cond('if', vars.get('counter') > 0, () => {
    doc.log('Counter is positive');
});

// Math
math.add(10);
math.mul(2);
console.log(math.clear()); // 0
```

## API Reference

### `vars` - Variable Management

- `vars.decl(varName, value)` - Declare a variable
- `vars.set(varName, value)` - Set a variable value
- `vars.get(varName)` - Get a variable value
- `vars.addVar(varName, value)` - Add to a variable
- `vars.subVar(varName, value)` - Subtract from a variable
- `vars.mulVar(varName, value)` - Multiply a variable
- `vars.divVar(varName, value)` - Divide a variable
- `vars.remove(varName)` - Remove a variable
- `vars.clearVars()` - Clear all variables

### `markup` - DOM Manipulation

- `markup.newEl(el, id, props, content)` - Create a new element
- `markup.appendEl(id, content)` - Append to an element
- `markup.prependEl(id, content)` - Prepend to an element
- `markup.delEl(id)` - Delete an element
- `markup.updateEl(id, props, content)` - Update an element
- `markup.replaceEl(id, content)` - Replace an element

### `doc` - Document Utilities

- `doc.log(x)` - Console log
- `doc.alert(x)` - Show alert
- `doc.event(id, event, callback)` - Add event listener
- `doc.cond(statement, condition, result)` - Conditional execution
  - Statements: `'if'`, `'else'`, `'while'`, `'for'`

### `math` - Math Operations

- `math.add(number)` - Add to total
- `math.sub(number)` - Subtract from total
- `math.mul(number)` - Multiply total
- `math.div(number)` - Divide total
- `math.clear()` - Reset total to 0

## Examples

See the `examples/` directory for a counter demo.

