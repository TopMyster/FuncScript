const State = {
    total: 0,
}

function add(number) {
    State.total += number;
    return State.total;
}

function sub(number) {
    State.total -= number;
    return State.total;
}

function mul(number) {
    State.total *= number;
    return State.total;
}

function div(number) {
    State.total /= number;
    return State.total;
}

function clear() {
    State.total = 0;
    return State.total;
}

const math = {
    add,
    sub,
    mul,
    div,
    clear
};

export default math;
