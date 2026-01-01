function newEl(el, id, props, content) {
    let element = document.createElement(el)
    element.id = id
    element.props = props
    element.content = content
    return element
}

function delEl(id) {
    document.getElementById(id).remove()
}

function updateEl(id, props, content) {
    document.getElementById(id).props = props
    document.getElementById(id).content = content
}

function appendEl(id, content) {
    document.getElementById(id).appendChild(content)
}

function prependEl(id, content) {
    document.getElementById(id).prepend(content)
}

function replaceEl(id, content) {
    document.getElementById(id).replaceWith(content)
}

const elements = {
    newEl,
    delEl,
    updateEl,
    appendEl,
    prependEl,
    replaceEl
}

export default elements