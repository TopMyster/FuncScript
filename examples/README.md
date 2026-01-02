# FuncScript Counter Example

This is a simple counter application demonstrating the FuncScript library.

## Running the Example

1. Open `index.html` in your browser
2. Or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/examples/`

## Features Demonstrated

- **Variable management** with `vars.set()` and `vars.addVar()`
- **DOM creation** with `markup.newEl()` and `markup.appendEl()`
- **Event handling** with `doc.event()`
- **Conditional logic** with `doc.cond()`
- **Element updates** with `markup.updateEl()`
