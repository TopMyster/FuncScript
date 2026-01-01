const variables = {

};


function decl(varName) {
    variables[varName] = undefined;
}

function set(varName, value) {
    variables[varName] = value;
}

function get(varName) {
    return variables[varName];
}


const vars = {
    decl,
    set,
    get
}

export default vars