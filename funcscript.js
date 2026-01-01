//FuncScript Library

// Math
const mathState = {
    total: 0,
}

function add(number) {
    mathState.total += number;
    return mathState.total;
}

function sub(number) {
    mathState.total -= number;
    return mathState.total;
}

function mul(number) {
    mathState.total *= number;
    return mathState.total;
}

function div(number) {
    mathState.total /= number;
    return mathState.total;
}

function clear() {
    mathState.total = 0;
    return mathState.total;
}

const math = {
    add,
    sub,
    mul,
    div,
    clear
};

// Document

function log(x) {
    console.log(x)
}

function alert(x) {
    window.alert(x)
}

function event(id, event, result) {
    document.getElementById(id).addEventListener(event, result)
}

function cond(statement, condition, result) {
    const execute = () => typeof result === 'function' ? result() : result;
    if (statement === 'if') {
        if (condition) {
            return execute()
        }
    } else if (statement === 'while') {
        while (typeof condition === 'function' ? condition() : condition) {
            execute()
        }
    } else if (statement === 'else') {
        if (!condition) {
            return execute()
        }
    } else if (statement === 'for') {
        const count = typeof condition === 'function' ? condition() : condition;
        for (let i = 0; i < count; i++) {
            execute()
        }
    }
}

const doc = {
    log,
    alert,
    event,
    cond
}


// Variables

const variables = {};

function addVar(varName, value) {
    variables[varName] += value;
}

function subVar(varName, value) {
    variables[varName] -= value;
}

function mulVar(varName, value) {
    variables[varName] *= value;
}

function divVar(varName, value) {
    variables[varName] /= value;
}

function decl(varName) {
    variables[varName] = undefined;
}

function set(varName, value) {
    variables[varName] = value;
}

function get(varName) {
    return variables[varName];
}

function remove(varName) {
    delete variables[varName];
}

function clearVars() {
    variables = {};
}


const vars = {
    decl,
    set,
    get,
    addVar,
    subVar,
    mulVar,
    divVar,
    remove,
    clearVars
}

// Markup

function newEl(el, id, props, content) {
    let element = document.createElement(el)
    element.id = id
    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            element.setAttribute(key, value)
        })
    }
    element.textContent = content
    return element
}

function appendEl(id, content) {
    document.getElementById(id).appendChild(content)
}

function prependEl(id, content) {
    document.getElementById(id).prepend(content)
}

function delEl(id) {
    document.getElementById(id).remove()
}

function updateEl(id, props, content) {
    const element = document.getElementById(id);
    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    if (content !== undefined) element.textContent = content;
}

function replaceEl(id, content) {
    const oldEl = document.getElementById(id);
    oldEl.replaceWith(content);
}

const markup = {
    newEl,
    delEl,
    updateEl,
    appendEl,
    prependEl,
    replaceEl
}

// Export

export { math, doc, vars, markup };