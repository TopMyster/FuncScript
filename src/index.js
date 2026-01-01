import { doc, vars, markup } from "../funcscript.js";

vars.decl('counter')
vars.set('counter', 0)

markup.appendEl('content', markup.newEl('h1', 'counter', { class: 'title' }, vars.get('counter')))
markup.appendEl('content', markup.newEl('button', 'counter-btn', { class: 'btn' }, '+1'))

doc.event('counter-btn', 'click', () => {
    vars.addV('counter', 1)
    markup.updateEl('counter', null, vars.get('counter'))
})
